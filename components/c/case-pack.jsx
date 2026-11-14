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
		"content": `<style>.caw6oo2ay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 11h13.75a2.625 2.625 0 0 1 2.625 2.625v4.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 17.875v-4.25A2.625 2.625 0 0 1 5.125 11M4 11V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6m2 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6");
}
</style><path class="caw6oo2ay"/>`,
		"fallback": "uix:case-pack",
	});
}

export default Component;
