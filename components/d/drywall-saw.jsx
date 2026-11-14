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
		"content": `<style>.n1bodnb-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 12.5l12-9l-1.25 3.75l-1-.75L17 10.25l-1-.75l-1.25 3.75l-1-.75l-2.25 3ZM10 14l-5 5m-1.5-1.5l3 3");
}
</style><path class="n1bodnb-x"/>`,
		"fallback": "uix-sharp:drywall-saw",
	});
}

export default Component;
