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
		"content": `<style>.wqkpgp8pu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3.5 21c0-4 3.5-6 7.5-6c1.03 0 1.993.133 2.856.364M14.75 18l2 2L21 15.75");
}
</style><path class="wqkpgp8pu"/>`,
		"fallback": "uix:artist-verified",
	});
}

export default Component;
