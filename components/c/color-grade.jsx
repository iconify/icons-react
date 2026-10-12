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

.fvldyy7lq {
  cx: 14.25px;
  cy: 9.75px;
  r: 2.25px;
}

.gtkytcbvs {
  d: path("M12 4.5V6m0 12v1.5M4.5 12H6m12 0h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="gtkytcbvs"/><circle class="fvldyy7lq"/></g>`,
		"fallback": "iconoven:color-grade",
	});
}

export default Component;
