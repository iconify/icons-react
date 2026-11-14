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

.p16mkdbxb {
  d: path("M2.5 15.5v-5a3 3 0 0 1 3-3H13l3.5 4H20a1.5 1.5 0 0 1 1.5 1.5v2.5Z");
}

.x3el19-7i {
  d: path("M4.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2.5-9v4h3.5m-8-1.5v3M7 11.25h3");
}
</style><g class="hntgybcog"><path class="p16mkdbxb"/><path class="x3el19-7i"/></g>`,
		"fallback": "uix:funeral-procession",
	});
}

export default Component;
