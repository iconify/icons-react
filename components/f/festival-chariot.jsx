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

.hvw6w6b2h {
  d: path("M4.75 18.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m9 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.l9k65bbmp {
  d: path("m6 13l1.75-4h1.5l1.25-3.5L12 3l1.5 2.5L14.75 9h1.5L18 13M5.5 13h13a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 14.5A1.5 1.5 0 0 1 5.5 13");
}
</style><g class="hntgybcog"><path class="l9k65bbmp"/><path class="hvw6w6b2h"/></g>`,
		"fallback": "uix:festival-chariot",
	});
}

export default Component;
