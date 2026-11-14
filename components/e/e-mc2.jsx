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
		"content": `<style>.v6dk8-ban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.5l2 4.25l2.75-.5l-.5 2.75l4.25 2l-4.25 2l.5 2.75l-2.75-.5l-2 4.25l-2-4.25l-2.75.5l.5-2.75l-4.25-2l4.25-2l-.5-2.75l2.75.5Zm0 8.5h.01");
}
</style><path class="v6dk8-ban"/>`,
		"fallback": "uix:e-mc2",
	});
}

export default Component;
