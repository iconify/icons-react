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

.jianh4bcb {
  d: path("M2.5 15.5h19v-4l-3-3.5h-3v7.5");
}

.tfyew8b-a {
  d: path("M3.25 10.75a5 3.5-20 0 1 9.5-3.5a5 3.5-20 0 1-9.5 3.5M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jianh4bcb"/><path class="tfyew8b-a"/></g>`,
		"fallback": "uix:concrete-mixer-truck",
	});
}

export default Component;
