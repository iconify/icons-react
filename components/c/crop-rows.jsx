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
		"content": `<style>.ht07h9bfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.75h1a2.5 2.5 0 0 1 5 0h1a2.5 2.5 0 0 1 5 0h1a2.5 2.5 0 0 1 5 0h1m-17-6.5h1a2 2 0 0 1 4 0h.5a2 2 0 0 1 4 0h.5a2 2 0 0 1 4 0h1M7 6.75h1a1.5 1.5 0 0 1 3 0h2a1.5 1.5 0 0 1 3 0h1");
}
</style><path class="ht07h9bfw"/>`,
		"fallback": "uix:crop-rows",
	});
}

export default Component;
