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
		"content": `<style>.q-o3j8bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h2.5m2.5 0h2.5m2.5 0h2.5m2.5 0h2.5M8.575 9h8.05V3l-1.01.65l-7.23 4.7l-1.01.65zm0 6h8.05v6l-1.01-.65l-7.23-4.7l-1.01-.65z");
}
</style><path class="q-o3j8bvm"/>`,
		"fallback": "iconoven:flip-vertical-sharp",
	});
}

export default Component;
