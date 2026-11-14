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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yybf7lbzd {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5m-8.375-14h9.75A2.625 2.625 0 0 1 19.5 6.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 9.875v-3.75A2.625 2.625 0 0 1 7.125 3.5M7.5 6.75H12m-4.5 2.5H10");
}
</style><g class="hntgybcog"><path class="ekf2s55jf"/><path class="yybf7lbzd"/></g>`,
		"fallback": "uix:cheque-bearer",
	});
}

export default Component;
