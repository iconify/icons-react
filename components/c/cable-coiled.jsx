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
		"content": `<style>.vun2d9byi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4V7h-4ZM9 7h6v4.5H9Zm3 4.5l3.5 1.5l-7 2l7 2l-7 2l3.5 1.5v1");
}
</style><path class="vun2d9byi"/>`,
		"fallback": "uix-sharp:cable-coiled",
	});
}

export default Component;
