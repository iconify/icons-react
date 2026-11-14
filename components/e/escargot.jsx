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
		"content": `<style>.ezoz2c5do {
  d: path("M3 18h14.5c1.5 0 2.5-1 3-2.5L21 13m-9-4.75a3.25 3.25 0 1 1-3.25 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-yg2cbvz {
  d: path("M5.5 11.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="i-yg2cbvz"/><path class="ezoz2c5do"/></g>`,
		"fallback": "uix:escargot",
	});
}

export default Component;
