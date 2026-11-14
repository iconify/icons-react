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
		"content": `<style>.w0m1czbwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.75h9.75v6.5H2.5ZM15 7.25h6.5V17H15Z");
}
</style><path class="w0m1czbwa"/>`,
		"fallback": "uix-sharp:aspect-3-2",
	});
}

export default Component;
