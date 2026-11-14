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

.u50s7gb9m {
  d: path("M5.5 11h2a3.5 3.5 0 0 1 0 7h-2Zm8.5 0v7m0-2.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5.5 5.25V8m2.75-2.75a1 1.375 0 0 1 0 2.75a1 1.375 0 0 1 0-2.75m3.75 0h-1.5l-.25 1.25c1.25-.25 1.75.25 1.75.75c0 .75-1 1-1.75.5");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="u50s7gb9m"/></g>`,
		"fallback": "uix:element-dubnium",
	});
}

export default Component;
