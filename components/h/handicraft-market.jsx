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
		"content": `<style>.rfvwo2bdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-17.5 10h17v5h-17Zm2.75-5h3.5C11.5 13 11 16 10 16.5H6c-1-.5-1.5-3.5.25-5Zm7.75 1h5.5l-1 4H15Z");
}
</style><path class="rfvwo2bdu"/>`,
		"fallback": "uix-sharp:handicraft-market",
	});
}

export default Component;
