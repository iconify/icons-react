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
		"content": `<style>.dnkr4f8ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h1A1.75 1.75 0 0 1 7 4.25v1A1.75 1.75 0 0 1 5.25 7h-1A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.5 7h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 11.5 2.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7h-1A1.75 1.75 0 0 1 17 5.25v-1a1.75 1.75 0 0 1 1.75-1.75m-9.125 12h4.75A2.625 2.625 0 0 1 17 17.125v1.75a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 18.875v-1.75A2.625 2.625 0 0 1 9.625 14.5M4.75 9.75l7.25 2l7.25-2");
}
</style><path class="dnkr4f8ou"/>`,
		"fallback": "uix:consolidation",
	});
}

export default Component;
