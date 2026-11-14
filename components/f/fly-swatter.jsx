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
		"content": `<style>.m87mqfyvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 2.5L21.5 9L15 15.5L8.5 9Zm-3.25 9.75L3.5 20.5m8.25-14.75l6.5 6.5m0-6.5l-6.5 6.5");
}
</style><path class="m87mqfyvh"/>`,
		"fallback": "uix-sharp:fly-swatter",
	});
}

export default Component;
