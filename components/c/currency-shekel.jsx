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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlaf-9rsc {
  d: path("M7 17V7h4.25a2.5 2.5 0 0 1 2.5 2.5V14M17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-4.25v-7");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="xlaf-9rsc"/></g>`,
		"fallback": "iconoven:currency-shekel",
	});
}

export default Component;
