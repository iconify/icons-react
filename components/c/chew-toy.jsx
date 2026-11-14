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

.npr9l7b2y {
  d: path("M20 12a5 5 0 0 1-4 7a5 5 0 0 1-8 0a5 5 0 0 1-4-7a5 5 0 0 1 4-7a5 5 0 0 1 8 0a5 5 0 0 1 4 7");
}

.x2ho6y6-n {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="npr9l7b2y"/><path class="x2ho6y6-n"/></g>`,
		"fallback": "uix:chew-toy",
	});
}

export default Component;
