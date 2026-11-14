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
		"content": `<style>.tl5kv1bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9c0-4.25 3-6.5 7-6.5s7 2.25 7 6.5v5c0 4.5-3 7.5-7 7.5s-7-3-7-7.5Zm2.75 2h8.5M8 15h8m-6.25-4v7.75m4.5-7.75v7.75");
}
</style><path class="tl5kv1bsh"/>`,
		"fallback": "uix-sharp:goalie-mask",
	});
}

export default Component;
