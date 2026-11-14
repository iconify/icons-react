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
		"content": `<style>.y8v8u4iyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm0 0h12m-9.5 7L7 21m8.5-4l1.5 4m-5-5v5");
}
</style><path class="y8v8u4iyd"/>`,
		"fallback": "uix-sharp:bbq-area",
	});
}

export default Component;
