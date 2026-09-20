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

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ki3b7s-pe {
  d: path("M16 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ls7ugdcwr {
  d: path("M6 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m7ezp3bui {
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
}
</style><g class="hntgybcog"><path class="m7ezp3bui"/><path class="ls7ugdcwr"/><path class="if5ft31dv"/><path class="ki3b7s-pe"/></g>`,
		"fallback": "iconmind:cost-cloud-outline-thin",
	});
}

export default Component;
