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
		"content": `<style>.j032f9bya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm11.25-4h7.75v7.75H14Zm-2-10l4.25 7h-8.5Z");
}
</style><path class="j032f9bya"/>`,
		"fallback": "uix-sharp:diversity-inclusion",
	});
}

export default Component;
