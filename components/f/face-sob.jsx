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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.h4gk4p4ks {
  d: path("M9.75 8.75c-.65-.85-2.35-.85-3 0s-.5 2.75-.5 4.25m8-4.25c.65-.85 2.35-.85 3 0s.5 2.75.5 4.25m-7 1.25h2.5v1a1.25 1.25 0 0 1-2.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="h4gk4p4ks"/></g>`,
		"fallback": "iconoven:face-sob",
	});
}

export default Component;
