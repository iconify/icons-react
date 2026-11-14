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
		"content": `<style>.g741aj9hn {
  d: path("m12.25 15.25l3.25-4l3.25 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjzt3abcf {
  d: path("M13 6h5a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18h-5a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 13 6M7.5 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m-5-8.5v5");
}
</style><g class="hntgybcog"><path class="mjzt3abcf"/><path class="g741aj9hn"/></g>`,
		"fallback": "uix:image-stabilization",
	});
}

export default Component;
