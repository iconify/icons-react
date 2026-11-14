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
		"content": `<style>.wg323ew4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 6.75h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 6.75h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2m12.75-4.75h4.25M19 9.75l2.5 2.5l-2.5 2.5");
}
</style><path class="wg323ew4a"/>`,
		"fallback": "uix:event-source",
	});
}

export default Component;
