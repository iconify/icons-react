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
		"content": `<style>.dp_9nv0ya {
  d: path("M9.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-6 2.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.fsuih5bgb {
  d: path("M4 20.5L5.5 10L10 4l6.5 1l3.5 6.5v9m-17.5 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fsuih5bgb"/><path class="dp_9nv0ya"/></g>`,
		"fallback": "uix:boulder-problem",
	});
}

export default Component;
