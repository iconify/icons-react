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
		"content": `<style>.q44ocg4qm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 18h7a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5A1.5 1.5 0 0 1 8.5 18m3.5-7.5v-8m2.75 8.5L18 4.25M9.25 11L6 4.25m11 8.5l4.25-3.5M7 12.75l-4.25-3.5");
}
</style><path class="q44ocg4qm"/>`,
		"fallback": "uix:firework-fountain",
	});
}

export default Component;
