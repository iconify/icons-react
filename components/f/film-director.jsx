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
		"content": `<style>.w5ej8kbao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.75V13M18 2.75V13M6 3.5h12V7H6ZM4.5 10h15M6 13h12M6 13l12 8.5m0-8.5L6 21.5");
}
</style><path class="w5ej8kbao"/>`,
		"fallback": "uix-sharp:film-director",
	});
}

export default Component;
