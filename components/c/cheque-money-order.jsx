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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.d1w9skbig {
  d: path("M15.5 7H17a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5h-1.5A1.5 1.5 0 0 1 14 11V8.5A1.5 1.5 0 0 1 15.5 7m-7 1.25c1-.75 1.75.75 2.75 0M5.5 9h5m-5 4H9m3.5 3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="d1w9skbig"/></g>`,
		"fallback": "uix:cheque-money-order",
	});
}

export default Component;
