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
		"content": `<style>.bg9sz8lca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 18.5a5.5 2.5 0 1 0 11 0a5.5 2.5 0 1 0-11 0ZM3.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9.75.5Q15.5 9 15.5 13");
}
</style><path class="bg9sz8lca"/>`,
		"fallback": "uix-sharp:golf-putt",
	});
}

export default Component;
