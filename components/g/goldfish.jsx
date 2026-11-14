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

.t3xmgm3ui {
  d: path("M7.5 7.5c1-2.5 4-3.25 6 .25M7 11.5h.01");
}

.u5x6b1b_p {
  d: path("M3.5 13c0-4 3-6 6.5-6c3 0 5.5 2 6.5 4.5l4.5-4q-1.5 5.5 0 11l-4.5-4C15.5 17 13 19 10 19c-3.5 0-6.5-2-6.5-6");
}
</style><g class="hntgybcog"><path class="u5x6b1b_p"/><path class="t3xmgm3ui"/></g>`,
		"fallback": "uix:goldfish",
	});
}

export default Component;
