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
		"content": `<style>.ydntnbccd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 19.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3M8 19.5h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}
</style><path class="ydntnbccd"/>`,
		"fallback": "uix:handrail-pole",
	});
}

export default Component;
