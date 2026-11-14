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
		"content": `<style>.cy05j3bzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h1a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 7 19H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 3m13 5za2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 19 21a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 19 8M6.5 7h.01");
}
</style><path class="cy05j3bzt"/>`,
		"fallback": "uix:door-sensor-open",
	});
}

export default Component;
