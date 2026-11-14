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
		"content": `<style>.o7e5xcccb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.75h2a5.5 5.5 0 0 1 11 0h2Zm3.5 0v1.5a4 4 0 0 0 8 0v-1.5M4 21c0-2.172 3.261-3.645 7.534-3.745m8.444 3.439q.022.15.022.306m-5.25-3l2 2L21 15.75");
}
</style><path class="o7e5xcccb"/>`,
		"fallback": "uix-sharp:building-inspector",
	});
}

export default Component;
