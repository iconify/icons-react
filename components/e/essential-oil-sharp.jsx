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
		"content": `<style>.h1_xbzy0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.25v-3h1.5v-3.5h3v3.5h1.5v3Zm-2.5 3h11v9h-11zM19 11.5c1.5 1.85 2.25 3.15 2.25 4.25a2.25 2.25 0 0 1-4.5 0c0-1.1.75-2.4 2.25-4.25Z");
}
</style><path class="h1_xbzy0z"/>`,
		"fallback": "iconoven:essential-oil-sharp",
	});
}

export default Component;
