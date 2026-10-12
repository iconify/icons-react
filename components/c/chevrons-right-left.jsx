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
		"content": `<style>.hpeq5qb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 7l-3 5l3 5m11.5-10l3 5l-3 5m-8-10l-3 5l3 5m4.5-10l3 5l-3 5");
}
</style><path class="hpeq5qb-t"/>`,
		"fallback": "iconoven:chevrons-right-left",
	});
}

export default Component;
