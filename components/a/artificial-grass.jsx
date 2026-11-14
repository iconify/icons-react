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
		"content": `<style>.op-9uj8em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 13h13.75a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 15.875v-.25A2.625 2.625 0 0 1 5.125 13M4 13l2-7.5L8 13l2-7.5l2 7.5l2-7.5l2 7.5l2-7.5l2 7.5");
}
</style><path class="op-9uj8em"/>`,
		"fallback": "uix:artificial-grass",
	});
}

export default Component;
