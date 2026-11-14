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
		"content": `<style>.e18d4acjl {
  d: path("M8.5 4.5L5 8l3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt014lbom {
  d: path("M18.5 20c0-7.5-5-12-13.5-12");
}
</style><g class="hntgybcog"><path class="vt014lbom"/><path class="e18d4acjl"/></g>`,
		"fallback": "uix:arrow-curve-left",
	});
}

export default Component;
