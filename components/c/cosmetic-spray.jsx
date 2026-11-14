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
		"content": `<style>.rm1nx98xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 11h2.75a2.625 2.625 0 0 1 2.625 2.625v5.25A2.625 2.625 0 0 1 9.875 21.5h-2.75A2.625 2.625 0 0 1 4.5 18.875v-5.25A2.625 2.625 0 0 1 7.125 11M6.5 11V5.5A1.5 1.5 0 0 1 8 4h6.5v3.5h-4V11m2.25-3.5L15 11m3-8h.01m2.49 2.75h.01M18 8.5h.01");
}
</style><path class="rm1nx98xg"/>`,
		"fallback": "uix:cosmetic-spray",
	});
}

export default Component;
