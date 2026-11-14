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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.np82irbgh {
  d: path("M7.25 7.5h3.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 7.25 7.5m8 2.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6.5 16.5h.01m3.49 0h.01m3.49 0h.01");
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="np82irbgh"/></g>`,
		"fallback": "uix:control-panel",
	});
}

export default Component;
