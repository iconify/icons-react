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
		"content": `<style>.nd97l8zdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21.5L6 16c-2-1.5-3-3.5-3-5.5c0-1.5 1.5-2 2.5-1l2 2.5V6c0-2.5 2-3.5 5-3.5c3.5 0 7 1.5 7 5.5v7c0 3-1.5 5-3 6.5Zm4-15v6m4-6v6");
}
</style><path class="nd97l8zdo"/>`,
		"fallback": "uix:baseball-glove",
	});
}

export default Component;
