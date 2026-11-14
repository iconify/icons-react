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

.on02cg6kp {
  d: path("M4.5 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.25 4.25h7.75m-6 0l-1.25 5.75m5.5-5.75L21 21.5m-8-2.75h9");
}

.t286_lbil {
  d: path("M2.5 10V2.5h9L15 6v4Zm2.75-4.25h4");
}
</style><g class="hntgybcog"><path class="t286_lbil"/><path class="on02cg6kp"/></g>`,
		"fallback": "uix:food-truck-park",
	});
}

export default Component;
