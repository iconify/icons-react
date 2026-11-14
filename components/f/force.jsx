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
		"content": `<style>.wnnsa_bnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 6h2a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18h-2a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 16 6M2.5 12h7.25m-3-3l3 3l-3 3");
}
</style><path class="wnnsa_bnc"/>`,
		"fallback": "uix:force",
	});
}

export default Component;
