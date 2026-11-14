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
		"content": `<style>.gdtd7ubri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.646 6.964l3.89 3.89a2.25 2.25 0 0 1 0 3.182a2.25 2.25 0 0 1-3.182 0l-3.89-3.89a2.25 2.25 0 0 1 0-3.182a2.25 2.25 0 0 1 3.182 0M10.5 9l6.25-6.25M4 18.5h7a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20A1.5 1.5 0 0 1 4 18.5m11.5-3l5 5m0-5l-5 5");
}
</style><path class="gdtd7ubri"/>`,
		"fallback": "uix:conviction",
	});
}

export default Component;
