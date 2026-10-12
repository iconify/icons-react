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
		"content": `<style>.nxcu2rb3p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.25h14v6c0 4-3 7-7 7s-7-3-7-7Z");
}

.w194klbmu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 16h3m3-5.5v3.75c0 1.25-.5 2.5-1.25 3.25");
}

.w8ehhfbko {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 11.75h.01m4.99 0h.01");
}

.wzovp8bkt {
  width: 16px;
  height: 3px;
  x: 4px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="wzovp8bkt"/><path class="nxcu2rb3p"/><path class="w8ehhfbko"/><path class="w194klbmu"/></g>`,
		"fallback": "iconoven:face-shield-med",
	});
}

export default Component;
