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
		"content": `<style>.wjvgcbbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v8.5H3Zm3 3h10M6 8.75h7M3 15h16M3 18h12M3 21h14");
}
</style><path class="wjvgcbbma"/>`,
		"fallback": "uix-sharp:featured-snippet",
	});
}

export default Component;
