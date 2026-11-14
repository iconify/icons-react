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
		"content": `<style>.d2uofljtc {
  d: path("M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5ZM9.5 5v-.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5V5");
}

.h390inazq {
  d: path("M9.75 11.5h4.5A1.75 1.75 0 0 1 16 13.25v3A1.75 1.75 0 0 1 14.25 18h-4.5A1.75 1.75 0 0 1 8 16.25v-3a1.75 1.75 0 0 1 1.75-1.75m2.25 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d2uofljtc"/><path class="h390inazq"/></g>`,
		"fallback": "uix:delivery-box-backpack",
	});
}

export default Component;
