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

.t6vq_mb9u {
  d: path("M7.25 10.25a5 5 0 0 1 3-3");
}

.x7jyndbrk {
  d: path("M2.5 12a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="x7jyndbrk"/><path class="t6vq_mb9u"/></g>`,
		"fallback": "uix:amber-stone",
	});
}

export default Component;
