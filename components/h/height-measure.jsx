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
		"content": `<style>.hjmf1-bbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h4.5v19H4ZM4 6h2M4 9.5h1.5M4 13h2m-2 3.5h1.5m3-8.25h11v2.5h-11Zm-6 13.25h19");
}
</style><path class="hjmf1-bbc"/>`,
		"fallback": "uix-sharp:height-measure",
	});
}

export default Component;
