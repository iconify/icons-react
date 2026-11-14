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
		"content": `<style>.afi3itbhk {
  d: path("M7.75 20.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoj86wbnj {
  d: path("M10.5 7h3a3.5 3.5 0 0 1 3.5 3.5V16a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 16v-5.5A3.5 3.5 0 0 1 10.5 7m-.75 0V2.5h4.5V7");
}
</style><g class="hntgybcog"><path class="xoj86wbnj"/><path class="afi3itbhk"/></g>`,
		"fallback": "uix:business-travel-bag",
	});
}

export default Component;
