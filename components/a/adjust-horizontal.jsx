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
		"content": `<style>.k9al0j3tn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8H11m8 0h1.5M15 5za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M3.5 16H5m8 0h7.5M9 13za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2");
}
</style><path class="k9al0j3tn"/>`,
		"fallback": "uix:adjust-horizontal",
	});
}

export default Component;
