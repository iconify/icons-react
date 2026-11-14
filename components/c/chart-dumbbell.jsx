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

.jvz7t0bpz {
  d: path("M6 5h8m-4 7h9M5 19h11.5");
}

.uib6r-52o {
  fill: currentColor;
  d: path("M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-15 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0M15 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jvz7t0bpz"/><path class="uib6r-52o"/></g>`,
		"fallback": "uix:chart-dumbbell",
	});
}

export default Component;
