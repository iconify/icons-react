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

.m6vrrfjee {
  d: path("m6.75 19.5l-1.5 1.75m12-1.75l1.5 1.75M3.5 6.5l3.25-2.75M20.5 6.5l-3.25-2.75M12 9.25v3.5l2.25 1.5");
}

.owcfk0-vx {
  cx: 12px;
  cy: 12.75px;
  r: 7.5px;
}
</style><g class="hntgybcog"><circle class="owcfk0-vx"/><path class="m6vrrfjee"/></g>`,
		"fallback": "iconoven:alarm",
	});
}

export default Component;
