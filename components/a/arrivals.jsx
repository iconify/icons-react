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
		"content": `<style>.qnx7go8sc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.9-4.75 6.5-4.75s6.5 2 6.5 4.75c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm16.5 2.5h-6m2.5-2.5l-2.5 2.5l2.5 2.5");
}
</style><path class="qnx7go8sc"/>`,
		"fallback": "uix-sharp:arrivals",
	});
}

export default Component;
