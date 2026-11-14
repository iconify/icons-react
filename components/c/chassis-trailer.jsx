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

.ni-w81bfv {
  d: path("M4.25 9.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 14H4.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 9.5M4.5 6v3.5m15-3.5v3.5");
}

.x6u1tmb6n {
  d: path("M2.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ni-w81bfv"/><path class="x6u1tmb6n"/></g>`,
		"fallback": "uix:chassis-trailer",
	});
}

export default Component;
