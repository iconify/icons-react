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
		"content": `<style>.kql7g5t1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h9q7.5 0 9-17l-5 1Q14.5 15 10 15H3Zm2.75-2.75h3.5");
}
</style><path class="kql7g5t1k"/>`,
		"fallback": "uix:banked-curve",
	});
}

export default Component;
