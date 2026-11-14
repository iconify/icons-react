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
		"content": `<style>.yu6r67b1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21L9 3m11 18L15 3M5.5 16h13M6.75 11h10.5M8 6.5h8");
}
</style><path class="yu6r67b1l"/>`,
		"fallback": "uix-sharp:agility-ladder",
	});
}

export default Component;
