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
		"content": `<style>.eqv27vbly {
  d: path("M2.5 8.5H19v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipbwoz2sr {
  d: path("M5 5.5v10h16.5");
}
</style><g class="hntgybcog"><path class="ipbwoz2sr"/><path class="eqv27vbly"/></g>`,
		"fallback": "uix:crop-landscape",
	});
}

export default Component;
