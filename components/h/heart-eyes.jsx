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

.k53g5lksv {
  d: path("M9 11.25c-1.2-.88-2-1.6-2-2.48c0-.6.44-1.04 1-1.04c.44 0 .8.24 1 .6c.2-.36.56-.6 1-.6c.56 0 1 .44 1 1.04c0 .88-.8 1.6-2 2.48m6 0c-1.2-.88-2-1.6-2-2.48c0-.6.44-1.04 1-1.04c.44 0 .8.24 1 .6c.2-.36.56-.6 1-.6c.56 0 1 .44 1 1.04c0 .88-.8 1.6-2 2.48M8.75 15c.9 1 2 1.5 3.25 1.5s2.35-.5 3.25-1.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k53g5lksv"/></g>`,
		"fallback": "iconoven:heart-eyes",
	});
}

export default Component;
