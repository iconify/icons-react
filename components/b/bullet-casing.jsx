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
		"content": `<style>.nabearn8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 9l-2 2.5V19h8v-7.5L14 9Zm0 0V6.5c0-2.25 1-4 2-4s2 1.75 2 4V9M7 19h10v2.5H7Z");
}
</style><path class="nabearn8w"/>`,
		"fallback": "uix-sharp:bullet-casing",
	});
}

export default Component;
