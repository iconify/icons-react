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

.oq-j6euas {
  d: path("M6.5 7.75v8.5m11 0V9.5A2.5 2.5 0 0 0 15 7h-3.5");
}

.q-5kbtbee {
  d: path("M13.5 4.5L11 7l2.5 2.5m-9.25-4a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m11 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="oq-j6euas"/><path class="q-5kbtbee"/></g>`,
		"fallback": "uix:code-pull-request",
	});
}

export default Component;
