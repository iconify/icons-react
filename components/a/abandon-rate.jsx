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
		"content": `<style>.qxuvbkb1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h13L11 11.5v9H7v-9ZM9 8h12.5m-3-3l3 3l-3 3");
}
</style><path class="qxuvbkb1z"/>`,
		"fallback": "uix-sharp:abandon-rate",
	});
}

export default Component;
