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

.m6h02bxbp {
  d: path("M8 17c.75-1.75 2.5-2 4-1.25c1.5-.75 3.25-.5 4 1.25m-4-4h.01M9 9.75h.01m5.99 0h.01");
}

.wb2xo4-5f {
  d: path("m4.5 10l-1 .5l-1-3.75L6.25 5.5C8 4.75 10 4.5 12 4.5s4 .25 5.75 1l3.75 1.25l-1 3.75l-1-.5v4c0 4.5-3 6.5-7.5 6.5s-7.5-2-7.5-6.5Z");
}
</style><g class="hntgybcog"><path class="wb2xo4-5f"/><path class="m6h02bxbp"/></g>`,
		"fallback": "uix:dog-breed-bulldog",
	});
}

export default Component;
