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
		"content": `<style>.w96l3ivql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v18.5H4.75zm5.5 3.5h3.5m-1.75 0v5m-1.75 0h3.5m-5.5 3.5h7.5m-7.5 3h5");
}
</style><path class="w96l3ivql"/>`,
		"fallback": "iconoven:constitution-article-sharp",
	});
}

export default Component;
