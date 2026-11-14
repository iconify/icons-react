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
		"content": `<style>.pxuk8tiql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 5h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 2m-1 3L4 22M14 5l6 17M8.25 10l10 7m-2.5-7l-10 7M2 22h20");
}
</style><path class="pxuk8tiql"/>`,
		"fallback": "uix:derrick",
	});
}

export default Component;
