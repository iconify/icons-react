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
		"content": `<style>.kmnr8jx4o {
  cx: 12px;
  cy: 12px;
  r: 10px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pr52f_b5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
}

.wbw_ixbrw {
  d: path("M15.5 10.5C15.5 11.0523 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.0523 14.5 10.5C14.5 9.94772 14.7239 9.5 15 9.5C15.2761 9.5 15.5 9.94772 15.5 10.5Z");
}

.wziug5bsa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 16H12H15");
}

.yad62e0rw {
  cx: 9px;
  cy: 10.5px;
  rx: 0.5px;
  ry: 1px;
}
</style><g class="pr52f_b5y"><circle class="kmnr8jx4o"/><path class="wziug5bsa"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:expressionless-circle-linear",
	});
}

export default Component;
