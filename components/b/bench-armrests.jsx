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
		"content": `<style>.l227mbcus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19v3.5h-19Zm3 3.5l-1 6m14-6l1 6M3.75 10V5.5H8.5M20.25 10V5.5H15.5");
}
</style><path class="l227mbcus"/>`,
		"fallback": "uix-sharp:bench-armrests",
	});
}

export default Component;
