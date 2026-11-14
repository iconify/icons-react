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
		"content": `<style>.kuanwob2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.5h5.5a1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 14.75 10h-5.5A1.75 1.75 0 0 1 7.5 8.25v-4A1.75 1.75 0 0 1 9.25 2.5M3 21.5h18M7.5 5.25h9m-4.5 7.5v6m-2.5-2.5l2.5 2.5l2.5-2.5");
}
</style><path class="kuanwob2t"/>`,
		"fallback": "uix:drop-test",
	});
}

export default Component;
