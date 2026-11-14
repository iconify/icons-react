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
		"content": `<style>.srrggtnfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5v-1a7 7 0 0 1 14 0v1m-16 0h5v7H3Zm13 0h5v7h-5Z");
}
</style><path class="srrggtnfo"/>`,
		"fallback": "uix-sharp:headphones",
	});
}

export default Component;
