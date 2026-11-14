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
		"content": `<style>.ck74xj85k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21C8 16 10 12.5 14 11.5v-8l2.75 3h1l2.75-3V10c0 1.75-1 2.75-2.25 3.25L19 21Zm0 0h-2c-2.5 0-3-4-.5-5m11.5-6.75h.01");
}
</style><path class="ck74xj85k"/>`,
		"fallback": "uix-sharp:cat-breed-sphynx",
	});
}

export default Component;
