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

.w3c-x5vyi {
  d: path("M10.5 6.5v-3h11q-.75 6 0 12h-3.25");
}

.w9zj2rw3x {
  d: path("m3 11.5l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2q-.75 5 0 10H3q.75-5 0-10");
}

.x9ly4lbve {
  d: path("M7.5 9.5v-3h11q-.75 6 0 12h-3.75");
}
</style><g class="hntgybcog"><path class="w9zj2rw3x"/><path class="x9ly4lbve"/><path class="w3c-x5vyi"/></g>`,
		"fallback": "uix:crisps-multipack",
	});
}

export default Component;
