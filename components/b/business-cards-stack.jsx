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
		"content": `<style>.dmx341b4m {
  d: path("M6.5 9V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m-11-3h.01m2.99-1.5h5m-5 3H13");
}

.f2nq5gbuy {
  d: path("M6 9h8a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 14 19H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f2nq5gbuy"/><path class="dmx341b4m"/></g>`,
		"fallback": "uix:business-cards-stack",
	});
}

export default Component;
