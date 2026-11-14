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
		"content": `<style>.haem-3vvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 9h1a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 8 18v-5.5A3.5 3.5 0 0 1 11.5 9m-.5 9h2M12 2.5V6M6 3.5l1.75 2.75M18 3.5l-1.75 2.75");
}
</style><path class="haem-3vvd"/>`,
		"fallback": "uix:concert-crowd-lights",
	});
}

export default Component;
