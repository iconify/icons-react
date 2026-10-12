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

.nnmadibhj {
  d: path("M7.75 10h2.5m3.5 0h2.5m-7.5 5h6.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="nnmadibhj"/></g>`,
		"fallback": "iconoven:expressionless",
	});
}

export default Component;
