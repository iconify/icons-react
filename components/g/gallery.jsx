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
		"content": `<style>.ammrxdbeo {
  d: path("M10 3.5h8A3.5 3.5 0 0 1 21.5 7v5.5A3.5 3.5 0 0 1 18 16h-8a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 10 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0xmq5bps {
  d: path("M3 8v10a2.5 2.5 0 0 0 2.5 2.5h11m-7-7.5L13 9.5l2.5 2.5l1.5-1.5l2 2");
}
</style><g class="hntgybcog"><path class="ammrxdbeo"/><path class="v0xmq5bps"/></g>`,
		"fallback": "uix:gallery",
	});
}

export default Component;
