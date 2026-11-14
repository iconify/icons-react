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
		"content": `<style>.pvxf8ibzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5h5L17 5v14l-8.5-4.5h-5Zm3.5 5L8.5 20M20 9l1.5-1.5m-1 4.5h1.25");
}
</style><path class="pvxf8ibzx"/>`,
		"fallback": "uix-sharp:breach-notification",
	});
}

export default Component;
