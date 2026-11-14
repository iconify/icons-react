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
		"content": `<style>.ekc05xbat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 9.5l4 4l8-8m-3 7l1.25 1.25L21 5.5M3.5 19h17");
}
</style><path class="ekc05xbat"/>`,
		"fallback": "uix-sharp:done-all",
	});
}

export default Component;
