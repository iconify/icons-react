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

.mwjevvhpx {
  d: path("m11 21.5l-2.75-4C7.5 16.25 8.75 15 10 16l1.5 1.25V9.5a1.5 1.5 0 0 1 3 0v4.75l4.25.75c1.25.25 2 1.25 1.75 2.5l-.75 4m-11-16.25l1.5 1.5m7-1.5l-1.5 1.5");
}

.ne-zmeb0k {
  d: path("M9.75 12.5H4.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1.25");
}
</style><g class="hntgybcog"><path class="ne-zmeb0k"/><path class="mwjevvhpx"/></g>`,
		"fallback": "uix:ad-click",
	});
}

export default Component;
