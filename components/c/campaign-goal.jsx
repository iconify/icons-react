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
		"content": `<style>.bypaybsio {
  d: path("M2.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvwi8_b9m {
  d: path("M7 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0l7.5-7.5m0-3v3h3");
}
</style><g class="hntgybcog"><path class="bypaybsio"/><path class="uvwi8_b9m"/></g>`,
		"fallback": "uix:campaign-goal",
	});
}

export default Component;
