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
		"content": `<style>.l9-8qdbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16v12H4Zm0 12h16l1.75 3.25q.25 1-.75 1H3q-1 0-.75-1Z");
}
</style><path class="l9-8qdbkf"/>`,
		"fallback": "uix-sharp:category-laptops",
	});
}

export default Component;
