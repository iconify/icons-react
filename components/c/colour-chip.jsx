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
		"content": `<style>.c4_v7i59t {
  d: path("M5 3h14a2 2 0 0 1 2 2v10l-6 6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-axgf3zk {
  d: path("M21 15h-4a2 2 0 0 0-2 2v4");
}
</style><g class="hntgybcog"><path class="c4_v7i59t"/><path class="m-axgf3zk"/></g>`,
		"fallback": "uix:colour-chip",
	});
}

export default Component;
