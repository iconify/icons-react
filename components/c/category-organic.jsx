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
		"content": `<style>.dkep80bjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19C5 11 9 6 19.5 5c0 9-4.5 14-14.5 14Zm0 0l7-7");
}
</style><path class="dkep80bjl"/>`,
		"fallback": "uix-sharp:category-organic",
	});
}

export default Component;
