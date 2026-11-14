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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0zqeccla {
  d: path("m14 10l3.5-3.5m-3 0h3v3M10 10L6.5 6.5m3 0h-3v3M10 14l-3.5 3.5m0-3v3h3M14 14l3.5 3.5m0-3v3h-3");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="k0zqeccla"/></g>`,
		"fallback": "uix:expand-square",
	});
}

export default Component;
