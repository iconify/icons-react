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
		"content": `<style>.i658v47lm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5h8v14H8ZM6.5 2.5h11V5h-11Zm0 16.5h11v2.5h-11ZM8 12l8-4m-8 8l8-3.75");
}
</style><path class="i658v47lm"/>`,
		"fallback": "uix-sharp:barber-shop",
	});
}

export default Component;
