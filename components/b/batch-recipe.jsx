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
		"content": `<style>.cgurlxbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18c0 5-4 8.5-9 8.5s-9-3.5-9-8.5ZM3 7h17M10 7a5.5 2.75 0 1 0 11 0a5.5 2.75 0 1 0-11 0Z");
}
</style><path class="cgurlxbxh"/>`,
		"fallback": "uix-sharp:batch-recipe",
	});
}

export default Component;
