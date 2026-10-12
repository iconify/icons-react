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
		"content": `<style>.n-jan1b0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.75L10.25 11m4.25-2.5h6.75M9.5 6h5v5h-5z");
}
</style><path class="n-jan1b0m"/>`,
		"fallback": "iconoven:anchor-add-sharp",
	});
}

export default Component;
