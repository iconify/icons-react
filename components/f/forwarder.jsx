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
		"content": `<style>.en6nizbmm {
  d: path("M2.5 16.5h19v-5l-2-3H17v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgd7_1zkx {
  d: path("M2.5 18.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m14.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6.5 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2-3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9-2.5l-3-5l-5.5 2");
}
</style><g class="hntgybcog"><path class="en6nizbmm"/><path class="sgd7_1zkx"/></g>`,
		"fallback": "uix:forwarder",
	});
}

export default Component;
