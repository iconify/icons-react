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
		"content": `<style>.h3vprlbqt {
  d: path("M11.025 8.525a3.5 3.5 0 0 1 4.95 0M8.904 6.404a6.5 6.5 0 0 1 9.192 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.le8vfqj9i {
  d: path("M8 8h2a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18v-6.5A3.5 3.5 0 0 1 8 8M7 8V2.5m.5 14h3");
}
</style><g class="hntgybcog"><path class="le8vfqj9i"/><path class="h3vprlbqt"/></g>`,
		"fallback": "uix:channel-16",
	});
}

export default Component;
