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

.m7dl3usfy {
  d: path("M5.25 18.75v-.25c0-2.5 1.75-4.6 4.5-5.5a3.25 3.25 0 1 1 4.5 0c2.75.9 4.5 3 4.5 5.5v.25");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="m7dl3usfy"/></g>`,
		"fallback": "uix:avatar-circle",
	});
}

export default Component;
