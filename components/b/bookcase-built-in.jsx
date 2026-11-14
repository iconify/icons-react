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
		"content": `<style>.yvig_3gai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm0 4.75h15M4.5 12h15m-15 4.75h15M8 12v4.75M10.75 12v4.75m2.75 0l2.25-4.25");
}
</style><path class="yvig_3gai"/>`,
		"fallback": "uix-sharp:bookcase-built-in",
	});
}

export default Component;
