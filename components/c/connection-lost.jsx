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
		"content": `<style>.b5__5x71g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 12h1.5m7 0H17m-6.5-1.5l3 3m0-3l-3 3");
}
</style><path class="b5__5x71g"/>`,
		"fallback": "uix-sharp:connection-lost",
	});
}

export default Component;
