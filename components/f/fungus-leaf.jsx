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
		"content": `<style>.dy7fo74jr {
  d: path("M3.5 20.5c0-10.5 6.5-17 17-17c0 10.5-6.5 17-17 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tcnga7b2x {
  d: path("M7.75 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4.5-4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="dy7fo74jr"/><path class="tcnga7b2x"/></g>`,
		"fallback": "uix:fungus-leaf",
	});
}

export default Component;
