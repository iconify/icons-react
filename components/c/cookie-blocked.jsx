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

.m3xc64b5q {
  d: path("M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4");
}

.n0oj5qydu {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 3-18.5A4.5 4.5 0 0 0 21 8.75a9.5 9.5 0 0 1 .5 3.5h-7.25a2 2 0 0 0-2 2ZM8 9h.01m-.51 6h.01M12 10.5h.01");
}
</style><g class="hntgybcog"><path class="n0oj5qydu"/><path class="m3xc64b5q"/></g>`,
		"fallback": "uix:cookie-blocked",
	});
}

export default Component;
