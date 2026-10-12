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
		"content": `<style>.blvl3qbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h7.5A3.75 4.5 0 0 1 3 14m10.5 0H21a3.75 4.5 0 0 1-7.5 0M8 14l4-5m4 5l-4-5m0 0a2 2 0 1 1 0-4a2 2 0 1 1 0 4");
}
</style><path class="blvl3qbmy"/>`,
		"fallback": "iconoven:castanets",
	});
}

export default Component;
