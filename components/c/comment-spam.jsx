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

.m69eo45wu {
  d: path("M5 17a8.5 8.5 0 1 1 15.5-4.75h-6.25a2 2 0 0 0-2 2v6.25a8.5 8.5 0 0 1-4.75-1l-3.5 1Z");
}

.mwal6d02w {
  d: path("M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1-2l4 4");
}
</style><g class="hntgybcog"><path class="m69eo45wu"/><path class="mwal6d02w"/></g>`,
		"fallback": "uix:comment-spam",
	});
}

export default Component;
