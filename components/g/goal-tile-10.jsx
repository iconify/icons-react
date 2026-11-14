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

.rutfq1bjz {
  d: path("M5.5 13a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m5.5 0h.01M11 13l5.75-5.75m0-2v2h2");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="rutfq1bjz"/></g>`,
		"fallback": "uix:goal-tile-10",
	});
}

export default Component;
