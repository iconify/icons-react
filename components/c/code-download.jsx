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
		"content": `<style>.l93b0q-td {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 7l-5 5l5 5m8-10l5 5l-.233.233M14 4.5l-4 15m8-5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="l93b0q-td"/>`,
		"fallback": "uix-sharp:code-download",
	});
}

export default Component;
