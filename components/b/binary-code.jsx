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
		"content": `<style>.odq6__bch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5L7.5 4v16m4.5-8a4 8 0 1 0 8 0a4 8 0 1 0-8 0Z");
}
</style><path class="odq6__bch"/>`,
		"fallback": "uix-sharp:binary-code",
	});
}

export default Component;
