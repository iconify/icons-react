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
		"content": `<style>.bfe4i6qcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5c2 4 2 8.5 1 12m0 0c-1 2.5-3.5 5-5.5 7m5.5-7c1 2.5 3.5 5 5.5 7");
}
</style><path class="bfe4i6qcy"/>`,
		"fallback": "uix:hair-damage",
	});
}

export default Component;
