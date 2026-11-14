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
		"content": `<style>.wfl-cd5-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h9v7H5Zm9-5v14m0 0h6.5M5 9V4.5h5m-4 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3-9.5h5V16h-5Z");
}
</style><path class="wfl-cd5-z"/>`,
		"fallback": "uix-sharp:forklift-loaded",
	});
}

export default Component;
