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
		"content": `<style>.e-sit7gim {
  d: path("M4 10h16q1.25 0 .95 1.21l-1.4 5.58Q19.25 18 18 18H6q-1.25 0-1.55-1.21l-1.4-5.58Q2.75 10 4 10m3 8l-1.25 3.25M17 18l1.25 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iax6j2bbd {
  cx: 14px;
  cy: 4.25px;
  r: 1.25px;
}

.w8bwd1bmk {
  cx: 9px;
  cy: 5.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="w8bwd1bmk"/><circle class="iax6j2bbd"/><path class="e-sit7gim"/></g>`,
		"fallback": "iconoven:baby-bath",
	});
}

export default Component;
