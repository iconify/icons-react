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
		"content": `<style>.bv_atwbpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14V8a2 2 0 0 1 2-2H7a2 2 0 0 1 2 2v6m0 0V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6m0 0V8a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v6M4 14h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 17H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 14m.5 3v3.5m15-3.5v3.5");
}
</style><path class="bv_atwbpt"/>`,
		"fallback": "uix:cinema-seats",
	});
}

export default Component;
