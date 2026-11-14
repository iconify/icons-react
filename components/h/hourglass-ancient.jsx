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
		"content": `<style>.ephyckbdp {
  d: path("m16 14.5l-4-10v10zm-4 0l-5.5 1.25");
}

.feengacwm {
  d: path("M2.5 14.5a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="feengacwm"/><path class="ephyckbdp"/></g>`,
		"fallback": "uix:hourglass-ancient",
	});
}

export default Component;
