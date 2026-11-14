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
		"content": `<style>.r6skicboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5v-4c0-5 6-6 6-11v-4m3 19v-4c0-5 6-6 6-11v-4M9 21.5v-3m2-5.5l2-2m2-5.5v-3");
}
</style><path class="r6skicboc"/>`,
		"fallback": "uix:chicane",
	});
}

export default Component;
