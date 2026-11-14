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
		"content": `<style>.eo3yc4_-d {
  d: path("M15 4.5h5v5m-5.25 11.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqk2_ol2d {
  d: path("M3 14.5L8.5 9l3.5 3.5l8-8");
}
</style><g class="hntgybcog"><path class="uqk2_ol2d"/><path class="eo3yc4_-d"/></g>`,
		"fallback": "uix:capital-gains-tax",
	});
}

export default Component;
