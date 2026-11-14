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
		"content": `<style>.dnwry7j7k {
  d: path("M5.5 9.5c4 0 .5 6 5 6H16m0 0L14 13a2.5 2.5 0 1 1 4 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycpnfrb7x {
  d: path("m2.5 6l6-2l7 2l6-2v14l-6 2l-7-2l-6 2Z");
}
</style><g class="hntgybcog"><path class="ycpnfrb7x"/><path class="dnwry7j7k"/></g>`,
		"fallback": "uix:city-tour-map",
	});
}

export default Component;
