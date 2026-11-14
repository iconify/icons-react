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
		"content": `<style>.e6196-90k {
  d: path("M5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 16h9.9m4.35-.5h3a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 15 19.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m1.5 0V18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywknwg8ig {
  d: path("M5 10.5H2.5v-3l3-5h8l4 4.5H20a1.5 1.5 0 0 1 1.5 1.5v2H19m-10 0h6");
}
</style><g class="hntgybcog"><path class="ywknwg8ig"/><path class="e6196-90k"/></g>`,
		"fallback": "uix:curbside-pickup",
	});
}

export default Component;
