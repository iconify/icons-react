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

.i0kvlvwbh {
  d: path("M9.75 11.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.qagvjbc0e {
  d: path("M10.765 4.5h2.47a2.625 2.625 0 0 1 2.431 1.635l3.361 8.25A2.625 2.625 0 0 1 16.596 18H7.404a2.625 2.625 0 0 1-2.431-3.615l3.361-8.25A2.625 2.625 0 0 1 10.765 4.5M5 20.75h14");
}
</style><g class="hntgybcog"><path class="qagvjbc0e"/><path class="i0kvlvwbh"/></g>`,
		"fallback": "uix:capsule-spacecraft",
	});
}

export default Component;
