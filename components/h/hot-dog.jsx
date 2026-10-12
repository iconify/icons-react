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
		"content": `<style>.g_c-f5bux {
  width: 18.5px;
  height: 7.5px;
  x: 2.75px;
  y: 12.25px;
  rx: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.szlljkbjv {
  d: path("M3.5 9.5h17M7 16.75l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5");
}
</style><g class="hntgybcog"><rect class="g_c-f5bux"/><path class="szlljkbjv"/></g>`,
		"fallback": "iconoven:hot-dog",
	});
}

export default Component;
