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
		"content": `<style>.ffcs2qbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M9 21.5v-6H6.5v-3a2.75 2.75 0 0 1 2.75-2.75h5.5a2.75 2.75 0 0 1 2.75 2.75v3H15v6m-3-4.75v4.75");
}
</style><path class="ffcs2qbau"/>`,
		"fallback": "uix:adult-person",
	});
}

export default Component;
