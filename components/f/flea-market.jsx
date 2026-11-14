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
		"content": `<style>.z6nmlxb6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L5 3h14l2 4.5q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0q-1.5 2-3 0Zm-.5 13h19M4 15.5L5.5 12h4l1.5 3.5Zm3.5 0v5M16 12h3v1c2 1.5 2 6 .5 7.5h-4C14 19 14 14.5 16 13Z");
}
</style><path class="z6nmlxb6k"/>`,
		"fallback": "uix-sharp:flea-market",
	});
}

export default Component;
