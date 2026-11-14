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
		"content": `<style>.lrgu3sbls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h14v19H3ZM17 5h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3m0 3.5h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3M6.5 7h7");
}
</style><path class="lrgu3sbls"/>`,
		"fallback": "uix-sharp:chapter-markers",
	});
}

export default Component;
