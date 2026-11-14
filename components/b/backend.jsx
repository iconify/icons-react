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
		"content": `<style>.aczfdsh9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v19H3Zm0 6.25h18m-18 6.5h18M7 5.75h.01M7 12h.01M7 18.25h.01");
}
</style><path class="aczfdsh9x"/>`,
		"fallback": "uix-sharp:backend",
	});
}

export default Component;
