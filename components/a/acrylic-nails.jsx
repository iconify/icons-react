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
		"content": `<style>.emj71ydxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h8L17.5 15c0 3.5-2.5 6-5.5 6s-5.5-2.5-5.5-6Zm2 10l2.5-6");
}
</style><path class="emj71ydxx"/>`,
		"fallback": "uix-sharp:acrylic-nails",
	});
}

export default Component;
