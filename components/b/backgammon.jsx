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

.j52lqni1d {
  d: path("m5 4l1.75 6L8.5 4l1.75 6L12 4l1.75 6l1.75-6l1.75 6L19 4M5 20l1.75-6l1.75 6l1.75-6L12 20l1.75-6l1.75 6l1.75-6L19 20");
}

.mrqc7nh_b {
  width: 18.5px;
  height: 16px;
  x: 2.75px;
  y: 4px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="mrqc7nh_b"/><path class="j52lqni1d"/></g>`,
		"fallback": "iconoven:backgammon",
	});
}

export default Component;
