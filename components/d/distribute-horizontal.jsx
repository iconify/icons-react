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
		"content": `<style>.hx955oofa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4v16m19-16v16M6 6h4v12H6Zm8 2.5h4v7h-4Z");
}
</style><path class="hx955oofa"/>`,
		"fallback": "uix-sharp:distribute-horizontal",
	});
}

export default Component;
