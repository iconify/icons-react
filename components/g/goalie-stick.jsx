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
		"content": `<style>.cz7dlfb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20 3l-3.5 8M15 10l3 1.5l-4.5 9.5h-8a1.5 1.5 0 0 1 0-3H11Z");
}
</style><path class="cz7dlfb9g"/>`,
		"fallback": "uix-sharp:goalie-stick",
	});
}

export default Component;
