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
		"content": `<style>.ofponebql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 2.5L10 16c-1.5 2.5-3 4-5 4c-1.5 0-2-1.5-1-2.5m11 .5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="ofponebql"/>`,
		"fallback": "uix:bandy-stick",
	});
}

export default Component;
