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

.m5gqtwacl {
  d: path("M7.25 10.5h4.5L7.25 17h4.5m3.5-10.5V17m-1.75-4.25l3.75-2.25");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="m5gqtwacl"/></g>`,
		"fallback": "iconoven:currency-zloty",
	});
}

export default Component;
