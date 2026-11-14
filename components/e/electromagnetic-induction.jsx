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
		"content": `<style>.askog6b1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13h4.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 8.75 18h-4.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 4.25 13M13 5a2 7 0 0 1 0 14m3.25-14a2 7 0 0 1 0 14M19.5 5a2 7 0 0 1 0 14m-13-6v5M3 8h7M8 6l2 2l-2 2");
}
</style><path class="askog6b1a"/>`,
		"fallback": "uix:electromagnetic-induction",
	});
}

export default Component;
