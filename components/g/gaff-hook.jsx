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
		"content": `<style>.g0ywq7jsc {
  d: path("m4 20.5l7-12.25c1.5-2.75 5-4.75 7-2.75C19.5 7 19 10 17 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izj6_nbum {
  d: path("M17 11c3 2 3 5 0 7l2 3h-4l2-3c-3-2-3-5 0-7");
}
</style><g class="hntgybcog"><path class="g0ywq7jsc"/><path class="izj6_nbum"/></g>`,
		"fallback": "uix:gaff-hook",
	});
}

export default Component;
