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
		"content": `<style>.v4sqpib_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6.5l2.25-3h13.5l2.25 3Zm2 0V21M19 6.5V21M9.5 9.25h5A1.75 1.75 0 0 1 16.25 11v6a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 7.75 17v-6A1.75 1.75 0 0 1 9.5 9.25");
}
</style><path class="v4sqpib_n"/>`,
		"fallback": "uix:bus-stop-ad",
	});
}

export default Component;
