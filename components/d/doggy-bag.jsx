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

.p6rvgcb9d {
  d: path("M9.5 14.5c0-1 1.5-2 2.5-.5c1-1.5 2.5-.5 2.5.5c0 1.5-2.5 3-2.5 3s-2.5-1.5-2.5-3");
}

.xmo_79b-j {
  d: path("M5 8h14l-1.5 12h-11Zm3.5 0V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V8");
}
</style><g class="hntgybcog"><path class="xmo_79b-j"/><path class="p6rvgcb9d"/></g>`,
		"fallback": "uix:doggy-bag",
	});
}

export default Component;
