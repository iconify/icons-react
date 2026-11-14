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
		"content": `<style>.knk6tobri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 12.5l3-7h13l3 7V17a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm0 0h19");
}
</style><path class="knk6tobri"/>`,
		"fallback": "uix:data-empty",
	});
}

export default Component;
