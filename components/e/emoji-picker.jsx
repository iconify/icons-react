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

.qf4v1x4zs {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 9.5h.01m5.99 0h.01");
}

.z-6e4vlje {
  d: path("M16.763 14.75a5.5 5.5 0 0 1-9.526 0");
}
</style><g class="hntgybcog"><path class="qf4v1x4zs"/><path class="z-6e4vlje"/></g>`,
		"fallback": "uix:emoji-picker",
	});
}

export default Component;
