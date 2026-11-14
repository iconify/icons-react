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
		"content": `<style>.rwfzhtzqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h18v5H3Zm0 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0m-18.5 8h19");
}
</style><path class="rwfzhtzqq"/>`,
		"fallback": "uix-sharp:green-roof",
	});
}

export default Component;
