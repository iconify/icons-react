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
		"content": `<style>.beb2c9bdf {
  d: path("M2.5 11.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m14 0h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_mo38bba {
  d: path("M6 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="beb2c9bdf"/><path class="q_mo38bba"/></g>`,
		"fallback": "uix:cast-iron-skillet",
	});
}

export default Component;
