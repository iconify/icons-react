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
		"content": `<style>.vvx0n6f4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.5v-14a3.5 3.5 0 0 1 7 0c0 2-1.5 3.5-4 3.5c4 0 6.5 1.5 6.5 4.5c0 2.5-2 4-4.5 4c-2 0-4-.75-5-2");
}
</style><path class="vvx0n6f4k"/>`,
		"fallback": "uix:beta",
	});
}

export default Component;
