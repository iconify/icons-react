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
		"content": `<style>.qrdx0_b-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h3.5v12H3Zm3.5 2h3v8h-3Zm11-2H21v12h-3.5Zm-3 2h3v8h-3Zm-5 4h5");
}
</style><path class="qrdx0_b-l"/>`,
		"fallback": "uix-sharp:barbell-loaded",
	});
}

export default Component;
