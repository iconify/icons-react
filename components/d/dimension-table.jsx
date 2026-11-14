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

.t5s_vbvur {
  d: path("m6.5 7l2-2h8v4h-8z");
}

.w5jhjib1r {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M3 11h18M3 16h18m-10.5-5v10");
}
</style><g class="hntgybcog"><path class="w5jhjib1r"/><path class="t5s_vbvur"/></g>`,
		"fallback": "uix:dimension-table",
	});
}

export default Component;
