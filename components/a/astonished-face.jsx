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

.kn2vr8bxq {
  d: path("M12 13a1.75 2.75 0 1 1 0 5.5a1.75 2.75 0 1 1 0-5.5");
}

.kz9_6bmgb {
  cx: 15.25px;
  cy: 9.25px;
  r: 2.25px;
}

.rp30yac0h {
  cx: 8.75px;
  cy: 9.25px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="rp30yac0h"/><circle class="kz9_6bmgb"/><path class="kn2vr8bxq"/></g>`,
		"fallback": "iconoven:astonished-face",
	});
}

export default Component;
