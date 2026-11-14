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
		"content": `<style>.wmkc6uq0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5Zm3.5 0v9m5.5-9v9m5.5-9V12M3 17.5h11.3m7.2-.75a2.25 2.25 0 1 1-2.25-2.25m-1.5 3.75L15 21");
}
</style><path class="wmkc6uq0s"/>`,
		"fallback": "uix-sharp:building-restoration",
	});
}

export default Component;
