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
		"content": `<style>.mziap9s1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5v-17a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v17M4.5 13h15m-10-5.5h5");
}
</style><path class="mziap9s1n"/>`,
		"fallback": "uix:dining-chair",
	});
}

export default Component;
