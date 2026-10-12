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

.khiea2lvp {
  d: path("M10.5 8h-2a1.25 1.25 0 0 0 0 2.5h1a1.25 1.25 0 0 1 0 2.5h-2M9 7v1m0 5v1m7.5-6h-2a1.25 1.25 0 0 0 0 2.5h1a1.25 1.25 0 0 1 0 2.5h-2M15 7v1m0 5v1m-6.25 2.5c.9 1 2 1.5 3.25 1.5s2.35-.5 3.25-1.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="khiea2lvp"/></g>`,
		"fallback": "iconoven:face-money",
	});
}

export default Component;
