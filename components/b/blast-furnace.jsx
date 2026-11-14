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

.qmyg63bpk {
  d: path("M10.5 21v-2a1.5 1.5 0 0 1 3 0v2");
}

.ujy0tybfh {
  d: path("m9 21l-1.5-8l2-7.5a2.5 2.5 0 0 1 5 0l2 7.5l-1.5 8Zm6-14h4.5v14M3 21h18");
}
</style><g class="hntgybcog"><path class="ujy0tybfh"/><path class="qmyg63bpk"/></g>`,
		"fallback": "uix:blast-furnace",
	});
}

export default Component;
