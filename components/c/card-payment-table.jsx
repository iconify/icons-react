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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rftcracfn {
  d: path("M8.25 11.5h7.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75m.25 7.25h.01m3.49 0h.01m3.49 0h.01");
}

.z3f0agbwq {
  d: path("M7.875 8.75h8.25a4.375 4.375 0 0 1 4.375 4.375v4.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 17.375v-4.25A4.375 4.375 0 0 1 7.875 8.75m.625 0l-1-5L16.25 2l1.25 6.75");
}
</style><g class="hntgybcog"><path class="z3f0agbwq"/><path class="rftcracfn"/></g>`,
		"fallback": "uix:card-payment-table",
	});
}

export default Component;
