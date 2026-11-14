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
		"content": `<style>.yu5s288vf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm1.75-3.75L4.5 4.5m11.25 3.75L19.5 4.5M8.25 15.75L4.5 19.5m11.25-3.75l3.75 3.75");
}
</style><path class="yu5s288vf"/>`,
		"fallback": "uix-sharp:currency-generic",
	});
}

export default Component;
