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
		"content": `<style>.fukuw3b5d {
  d: path("M10 21.5v-4a2 2 0 0 1 4 0v4m-8-11c2-1 10-1 12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tj591xb5k {
  d: path("M2.5 13c0-2 1-3.5 2.5-4.5L10 4c1.25-1 2.75-1 4 0l5 4.5c1.5 1 2.5 2.5 2.5 4.5ZM5 13v8.5h14V13");
}
</style><g class="hntgybcog"><path class="tj591xb5k"/><path class="fukuw3b5d"/></g>`,
		"fallback": "uix:cottage",
	});
}

export default Component;
