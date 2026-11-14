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
		"content": `<style>.b6gpm0bfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.237 4.237l4.672 4.672a.932.932 0 0 1-.659 1.591h-.5A1.75 1.75 0 0 0 15 12.25v3A1.75 1.75 0 0 1 13.25 17h-2.5A1.75 1.75 0 0 1 9 15.25v-3a1.75 1.75 0 0 0-1.75-1.75h-.5a.932.932 0 0 1-.659-1.591l4.672-4.672a1.75 1.75 0 0 1 2.474 0M4 20.5h16");
}
</style><path class="b6gpm0bfa"/>`,
		"fallback": "uix:exit-arrow-up",
	});
}

export default Component;
