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

.j_vig8b3c {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.smio6bcer {
  d: path("M2.5 11.5h12v-5h4l3 3.5v4.5h-19Z");
}
</style><g class="hntgybcog"><path class="smio6bcer"/><path class="j_vig8b3c"/></g>`,
		"fallback": "uix:flatbed-truck",
	});
}

export default Component;
