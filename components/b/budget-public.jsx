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
		"content": `<style>.br4y80b-n {
  d: path("M2.5 11a2 2 0 0 1 2-2H8l2 2h9.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m33plicre {
  d: path("M6.5 9V2.5h13V11");
}

.x_l86vbhc {
  d: path("M11.25 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="br4y80b-n"/><path class="m33plicre"/><path class="x_l86vbhc"/></g>`,
		"fallback": "uix:budget-public",
	});
}

export default Component;
