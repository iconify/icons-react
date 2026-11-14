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
		"content": `<style>.p__o_acyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5H8v13H3.5Zm12.5 0h4.5v13H16ZM8 12h8");
}
</style><path class="p__o_acyz"/>`,
		"fallback": "uix-sharp:dumbbell",
	});
}

export default Component;
