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
		"content": `<style>.x1ndbzbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l-4.5 6h2.25L5.5 14h2.75L4.5 18.5h15L15.75 14h2.75l-4.25-5.5h2.25Zm0 16v3m-5 0h10");
}
</style><path class="x1ndbzbje"/>`,
		"fallback": "uix-sharp:content-evergreen",
	});
}

export default Component;
