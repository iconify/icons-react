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

.mqattogip {
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V6a3.5 3.5 0 0 1 3.5-3.5M5 8h14M7.75 11v3.5");
}

.qxxvqvbru {
  d: path("M13.75 11c1.75 2 2.75 3.5 2.75 5c0 1.6-1.25 2.75-2.75 2.75S11 17.6 11 16c0-1.5 1-3 2.75-5");
}
</style><g class="hntgybcog"><path class="mqattogip"/><path class="qxxvqvbru"/></g>`,
		"fallback": "uix:blood-bank",
	});
}

export default Component;
