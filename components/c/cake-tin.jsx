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
		"content": `<style>.pmldxubxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0Zm0 0v6m17-6v6m-17 0a8.5 3 0 0 0 17 0m0-5.25h2v3h-2");
}
</style><path class="pmldxubxj"/>`,
		"fallback": "uix-sharp:cake-tin",
	});
}

export default Component;
