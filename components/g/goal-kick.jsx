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
		"content": `<style>.aobgpkb8l {
  d: path("M8 12.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0M2.5 19h19m-19-9h2.75M2.5 14h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q8ytjgbwc {
  d: path("m15.421 10.716l.54.42a1.5 1.5 0 0 1 .526 1.579l-.186.68a1.5 1.5 0 0 1-1.447 1.105h-.708a1.5 1.5 0 0 1-1.447-1.105l-.186-.68a1.5 1.5 0 0 1 .526-1.579l.54-.42a1.5 1.5 0 0 1 1.842 0M14.5 10V6m2.25 5.75l4-1.25m-4.75 4l2.25 3.25M13 14.5l-2.25 3.25m1.5-6l-4-1.25");
}
</style><g class="hntgybcog"><path class="aobgpkb8l"/><path class="q8ytjgbwc"/></g>`,
		"fallback": "uix:goal-kick",
	});
}

export default Component;
