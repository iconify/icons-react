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
		"content": `<style>.c7w5jjx3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za2 2 0 0 1 2 2V5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2M11.25 7h1.5A2.25 2.25 0 0 1 15 9.25a2.25 2.25 0 0 1-2.25 2.25h-1.5A2.25 2.25 0 0 1 9 9.25A2.25 2.25 0 0 1 11.25 7m.75 4.5l3.5 1.5l-7 2l7 2l-7 2l3.5 1.5v1");
}
</style><path class="c7w5jjx3x"/>`,
		"fallback": "uix:cable-coiled",
	});
}

export default Component;
