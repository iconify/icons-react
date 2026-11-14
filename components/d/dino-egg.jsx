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

.idx0akzwx {
  d: path("M5.5 8.5L8 7l2 2.5L12.5 7l2 2.5l2.25-2l1.75 1m-9 6.5h.01m4.99 1.5h.01");
}

.p4kxh5b_o {
  d: path("M5 12a7 9.5 0 1 0 14 0a7 9.5 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="p4kxh5b_o"/><path class="idx0akzwx"/></g>`,
		"fallback": "uix:dino-egg",
	});
}

export default Component;
