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
		"content": `<style>.sxasyn_mp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5za2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2M7 7h10m-.25 8.5h2.5A1.75 1.75 0 0 1 21 17.25v2.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.5v-2.25a1.75 1.75 0 0 1 1.75-1.75M15 17.75h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="sxasyn_mp"/>`,
		"fallback": "uix:equipment-booking",
	});
}

export default Component;
