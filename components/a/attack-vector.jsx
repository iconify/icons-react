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
		"content": `<style>.d6icknb8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0h.01M3.5 20.5L12 12m-4 0h4v4");
}
</style><path class="d6icknb8u"/>`,
		"fallback": "uix-sharp:attack-vector",
	});
}

export default Component;
