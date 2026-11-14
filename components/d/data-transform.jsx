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
		"content": `<style>.bukci8bcd {
  d: path("M4.25 2.5h4A1.75 1.75 0 0 1 10 4.25v4A1.75 1.75 0 0 1 8.25 10h-4A1.75 1.75 0 0 1 2.5 8.25v-4A1.75 1.75 0 0 1 4.25 2.5M13 17.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0m-.5-11c2.75 0 4.75 1.75 4.75 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kr0w97b8k {
  d: path("m15.25 8.75l2 2l2-2");
}
</style><g class="hntgybcog"><path class="bukci8bcd"/><path class="kr0w97b8k"/></g>`,
		"fallback": "uix:data-transform",
	});
}

export default Component;
