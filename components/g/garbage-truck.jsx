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

.psrmapn0r {
  d: path("M4.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.v-1g9bc9b {
  d: path("M2.5 17.5h19v-4L18 10h-3.5v7.5");
}

.ziz3bhbsy {
  d: path("m11.5 9l-1 8.5H4L3 9m0 0l7.5-4.5");
}
</style><g class="hntgybcog"><path class="v-1g9bc9b"/><path class="psrmapn0r"/><path class="ziz3bhbsy"/></g>`,
		"fallback": "uix:garbage-truck",
	});
}

export default Component;
