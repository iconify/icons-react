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
		"content": `<style>.fbkf-rbod {
  d: path("M2.5 15.5v-4Q2.5 10 4 10h1.5l3-5h7l3 5H20q1.5 0 1.5 1.5v4Zm3-5.5h13");
}

.h5ayq4b5f {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fbkf-rbod"/><path class="h5ayq4b5f"/></g>`,
		"fallback": "uix:directions-car",
	});
}

export default Component;
