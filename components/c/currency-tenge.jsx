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

.m38j91j3a {
  d: path("M7.25 7h9.5m-9.5 3.25h9.5m-4.75 0V18");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="m38j91j3a"/></g>`,
		"fallback": "iconoven:currency-tenge",
	});
}

export default Component;
