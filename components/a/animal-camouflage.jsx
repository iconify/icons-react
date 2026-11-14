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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.e-y3mxbnv {
  d: path("M6.5 16.5c0-2.25 3-3.75 6-3.25s5.25 1.75 5 3.75c-.25 1.75-3 2.25-5.75 2c-3-.25-5.25-.75-5.25-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.styxlvykt {
  d: path("M5.5 8c0-2.5 2-3.5 4-3.25S12 7 11.25 9S8 11.5 6.75 10.75C5.75 10.25 5.5 9 5.5 8");
}

.u-8uvcjos {
  d: path("M10.5 9.5c0-2.5 3-3.75 5.25-3s3 3.5 1.75 5.5s-4.5 2-5.75.75c-1-1-1.25-2.25-1.25-3.25");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="styxlvykt"/><path class="u-8uvcjos"/><path class="e-y3mxbnv"/></g>`,
		"fallback": "uix:animal-camouflage",
	});
}

export default Component;
