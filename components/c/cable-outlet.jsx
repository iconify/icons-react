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

.sbq8clbkb {
  d: path("M7.875 2.5h8.25A4.375 4.375 0 0 1 20.5 6.875v7.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 14.125v-7.25A4.375 4.375 0 0 1 7.875 2.5");
}

.zgqn_0f_u {
  d: path("M8 7h8v5.5h-1.5V14h-5v-1.5H8Zm4 7v7.5");
}
</style><g class="hntgybcog"><path class="sbq8clbkb"/><path class="zgqn_0f_u"/></g>`,
		"fallback": "uix:cable-outlet",
	});
}

export default Component;
