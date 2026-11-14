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
		"content": `<style>.c3ydpt6bj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H8v10H2.5ZM16 7h5.5v10H16ZM8 9.5h2.5v5H8m8-5h-2.5v5H16M10.5 12h3");
}
</style><path class="c3ydpt6bj"/>`,
		"fallback": "uix-sharp:api",
	});
}

export default Component;
