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
		"content": `<style>.mirlutb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14V4.5c3-1.75 5.5 1.25 8.5 0c2.5-1 4-.75 6 0V14c-2-.75-3.5-1-6 0c-3 1.25-5.5-1.75-8.5 0Zm0 0v7");
}
</style><path class="mirlutb3a"/>`,
		"fallback": "uix-sharp:build-flags",
	});
}

export default Component;
