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

.jwl0kxbzk {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.75 11.25h6.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-6.5A1.25 1.25 0 0 1 7.5 12.5a1.25 1.25 0 0 1 1.25-1.25m0 5.25h3.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 12.25 19h-3.5a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="jwl0kxbzk"/></g>`,
		"fallback": "uix:cheat-sheet",
	});
}

export default Component;
