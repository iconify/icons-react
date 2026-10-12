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
		"content": `<style>.f97t65wtd {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 6.5px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hrd267kkm {
  d: path("M11 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 0l1.5-1.5M19 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 0l-1.5-1.5");
}
</style><g class="hntgybcog"><rect class="f97t65wtd"/><path class="hrd267kkm"/></g>`,
		"fallback": "iconoven:dashboard-car",
	});
}

export default Component;
