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

.svciqqb_y {
  d: path("M2.5 19.5H3q5-6 10 0h8.5");
}

.x9s1xtqjs {
  d: path("M6.5 16.75V11a4.5 4.5 0 0 1 9 0v1a1.5 1.5 0 0 0 3 0V6.5a1.5 1.5 0 0 1 3 0V12a4.5 4.5 0 0 1-9 0v-1a1.5 1.5 0 0 0-3 0v5.75");
}
</style><g class="hntgybcog"><path class="x9s1xtqjs"/><path class="svciqqb_y"/></g>`,
		"fallback": "uix:earthworm",
	});
}

export default Component;
