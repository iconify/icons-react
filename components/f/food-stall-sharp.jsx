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
		"content": `<style>.z0b-30poj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l1.75-4.75h14.5L21 8.5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0Zm2.25 2.25v2.75m13.5-2.75v2.75m-16 0h18.5v5H2.75zm4.25 5v2.75m10-2.75v2.75");
}
</style><path class="z0b-30poj"/>`,
		"fallback": "iconoven:food-stall-sharp",
	});
}

export default Component;
