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
		"content": `<style>.robzqkb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5v16m-4.5 0h9M4.5 7h15m-17 6.5l2-6.5l2 6.5m-4 0c0 2 4 2 4 0m11 0l2-6.5l2 6.5m-4 0c0 2 4 2 4 0");
}
</style><path class="robzqkb0x"/>`,
		"fallback": "uix:compliance",
	});
}

export default Component;
