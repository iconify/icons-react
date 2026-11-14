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
		"content": `<style>.xvkahx5be {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 14.5h8v4c0 2-2 3-4 3s-4-1-4-3Zm4-9v9m-1-12h2A1.5 1.5 0 0 1 14.5 4A1.5 1.5 0 0 1 13 5.5h-2A1.5 1.5 0 0 1 9.5 4A1.5 1.5 0 0 1 11 2.5m-.25 7.5h2.5");
}
</style><path class="xvkahx5be"/>`,
		"fallback": "uix:avalanche-shovel",
	});
}

export default Component;
