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
		"content": `<style>.aw9bnz8uo {
  fill: currentColor;
  d: path("M9.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3xpc0btn {
  d: path("M6.5 20.5c0-4 2.5-7 5.5-7s5.5 3 5.5 7M2.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m14 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-14.25 9c0-2.25 1-4 2.5-4m16.5 4c0-2.25-1-4-2.5-4");
}
</style><g class="hntgybcog"><path class="aw9bnz8uo"/><path class="v3xpc0btn"/></g>`,
		"fallback": "uix:blue-team",
	});
}

export default Component;
