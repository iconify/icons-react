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
		"content": `<style>.vj5gbubvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 20.5v-17m9 0v17m-12-14l3-3l3 3m3 11l3 3l3-3");
}
</style><path class="vj5gbubvl"/>`,
		"fallback": "uix:arrows-up-down-alt",
	});
}

export default Component;
