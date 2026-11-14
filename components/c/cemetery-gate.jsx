import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.up4x6vbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M4 5h16M7 21.5V13a5 5 0 0 1 10 0v8.5M10.25 8.25V21.5m3.5-13.25V21.5");
}
</style><path class="up4x6vbmm"/>`,
		"fallback": "uix-sharp:cemetery-gate",
	});
}

export default Component;
