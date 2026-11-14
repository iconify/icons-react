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
		"content": `<style>.jg8kaqblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 4.5l9 2.25V21.5l-9-2.25Zm9 2.25l9-2.25v14.75l-9 2.25Zm-6 2.5L9 10m6 0l3-.75");
}
</style><path class="jg8kaqblr"/>`,
		"fallback": "uix-sharp:booklet",
	});
}

export default Component;
