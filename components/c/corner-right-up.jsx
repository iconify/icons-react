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
		"content": `<style>.g8-uwvbdc {
  d: path("m11 8.5l3.75-3.75L18.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rxlus3b-x {
  d: path("M4.25 19.75h8a2.5 2.5 0 0 0 2.5-2.5V4.75");
}
</style><g class="hntgybcog"><path class="rxlus3b-x"/><path class="g8-uwvbdc"/></g>`,
		"fallback": "iconoven:corner-right-up",
	});
}

export default Component;
