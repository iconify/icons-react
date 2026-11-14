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
		"content": `<style>.d10kx7_fd {
  d: path("M6 7.5h8A1.5 1.5 0 0 1 15.5 9v6a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 15V9A1.5 1.5 0 0 1 6 7.5M19 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ubp2zns0v {
  d: path("M5.5 5h13A3.5 3.5 0 0 1 22 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 15.5v-7A3.5 3.5 0 0 1 5.5 5");
}
</style><g class="hntgybcog"><path class="ubp2zns0v"/><path class="d10kx7_fd"/></g>`,
		"fallback": "uix:category-tablets",
	});
}

export default Component;
