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
		"content": `<style>.zkni717hi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 3.75l-1.75 16.5m8.5-16.5l-1.75 16.5M4.25 9h16m-16.5 6h16");
}
</style><path class="zkni717hi"/>`,
		"fallback": "iconoven:hashtag-sharp",
	});
}

export default Component;
