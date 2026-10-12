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
		"content": `<style>.bfi22y6kp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 15.75a10 10 0 0 1 7.5-3.5v2.5a1 1 0 0 1-1 1Z");
}

.c_86oibfw {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 5px;
}

.q7uogjb6l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3");
}

.tyba--flk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 9.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="c_86oibfw"/><path class="q7uogjb6l"/><path class="bfi22y6kp"/><path class="tyba--flk"/></g>`,
		"fallback": "iconoven:capsule-window",
	});
}

export default Component;
