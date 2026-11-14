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

.rmui-hb7m {
  d: path("M10.25 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.z1g911j4q {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m7 7v5");
}
</style><g class="hntgybcog"><path class="z1g911j4q"/><path class="rmui-hb7m"/></g>`,
		"fallback": "uix:bronze-mirror",
	});
}

export default Component;
