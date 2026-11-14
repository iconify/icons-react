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
		"content": `<style>.ba-hxebor {
  d: path("M14 21V4.5A1.5 1.5 0 0 1 15.5 3h4A1.5 1.5 0 0 1 21 4.5V21M6.75 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8 7.5l-1.5 5L9 15l-.5 6m-2-8.5l-2 3h-2");
}

.bu9r85lja {
  d: path("m4 9.5l2.5-1.75L9 8l2 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ba-hxebor"/><path class="bu9r85lja"/></g>`,
		"fallback": "uix:hospital-fire-exit",
	});
}

export default Component;
