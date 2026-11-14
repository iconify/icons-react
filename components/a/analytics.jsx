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
		"content": `<style>.m2ba6bb7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18h18M8 18v-5m4.5 5v-8m4.5 8V7M6 10.5l13-8");
}
</style><path class="m2ba6bb7a"/>`,
		"fallback": "uix-sharp:analytics",
	});
}

export default Component;
