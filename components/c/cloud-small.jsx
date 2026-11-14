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

.qumo93a_i {
  d: path("M9.25 15.5a2.5 2.5 0 0 1 0-5A3.25 3.25 0 0 1 15 10a2.75 2.75 0 0 1 0 5.5Z");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="qumo93a_i"/></g>`,
		"fallback": "uix:cloud-small",
	});
}

export default Component;
