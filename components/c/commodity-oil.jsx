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
		"content": `<style>.mncx10baf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5h13v16h-13ZM8 5V3h3v2m-5.5 5.5h13m-13 5h13");
}
</style><path class="mncx10baf"/>`,
		"fallback": "uix-sharp:commodity-oil",
	});
}

export default Component;
