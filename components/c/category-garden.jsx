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
		"content": `<style>.t6cjvupyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21h18m-9 0V10m0 0c0-3.5-2.5-5.5-6-5.5C6 8 8.5 10 12 10Zm0 3c0-3 2.5-5 6-5c0 3-2.5 5-6 5Z");
}
</style><path class="t6cjvupyq"/>`,
		"fallback": "uix-sharp:category-garden",
	});
}

export default Component;
