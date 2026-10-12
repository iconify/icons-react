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
		"content": `<style>.f4172ys_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.99 11.01l6.77-6.77l.99-.99V8.5h9v7h-9v5.25l-.99-.99l-6.77-6.77L3 12z");
}
</style><path class="f4172ys_w"/>`,
		"fallback": "iconoven:arrow-big-left-line-sharp",
	});
}

export default Component;
