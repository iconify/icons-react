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

.offs32jje {
  d: path("M11.18 19.5H2.5V8l5-4.5V8l5-4.5V8l5-4.5v9.42");
}

.znbkflb_y {
  d: path("M6.5 19.5V15H10v4.5m6.75 1.5H20a1.75 1.75 0 0 0 .25-3.5a2.75 2.75 0 0 0-5.25.25A1.75 1.75 0 0 0 16.75 21");
}
</style><g class="hntgybcog"><path class="offs32jje"/><path class="znbkflb_y"/></g>`,
		"fallback": "uix:factory-cloud",
	});
}

export default Component;
