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
		"content": `<style>.femaqu8cj {
  d: path("M3 3a14.5 14.5 0 0 1 3.75.5m2.75 1a14.5 14.5 0 0 1 3.25 2.25m2 2.25a14.5 14.5 0 0 1 1.75 3.25m.75 3a14.5 14.5 0 0 1 .25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9corfx1v {
  d: path("m15 15l2.5 2.5L20 15m-7.5 6h9");
}
</style><g class="hntgybcog"><path class="femaqu8cj"/><path class="l9corfx1v"/></g>`,
		"fallback": "uix:arrival-route",
	});
}

export default Component;
