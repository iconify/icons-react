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

.k56yy8bds {
  d: path("M8.5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4.5 9h.01M3 12.5h.01M4.5 16h.01");
}

.s5qxv-f-x {
  d: path("M7.5 15V6.5A1.5 1.5 0 0 1 9 5h6.5v3h3l3 3.5V15Z");
}
</style><g class="hntgybcog"><path class="s5qxv-f-x"/><path class="k56yy8bds"/></g>`,
		"fallback": "uix:ice-gritting-route",
	});
}

export default Component;
