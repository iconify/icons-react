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
		"content": `<style>.s2uj1rxqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10V9A5 5 0 0 1 7 9Zm0 2H5.25a2.25 2.25 0 0 0 0 4.5H7m10-4.5h1.75a2.25 2.25 0 0 1 0 4.5H17m-5 4v4m-4 0h8v3.5H8Z");
}
</style><path class="s2uj1rxqg"/>`,
		"fallback": "uix-sharp:award-winner",
	});
}

export default Component;
