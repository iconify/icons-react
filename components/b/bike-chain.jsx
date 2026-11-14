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
		"content": `<style>.b591iq3zq {
  d: path("m5 8.75l8.25-2.5a6 6 0 1 1 0 11.5L5 15.25a3.5 3.5 0 0 1 0-6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjh51qbtb {
  d: path("M11.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m-5.5 0h.01");
}
</style><g class="hntgybcog"><path class="b591iq3zq"/><path class="vjh51qbtb"/></g>`,
		"fallback": "uix:bike-chain",
	});
}

export default Component;
