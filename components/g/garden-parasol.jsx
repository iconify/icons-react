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
		"content": `<style>.rcbzet9di {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5C4 5.5 7.5 3 12 3s8 2.5 9 7.5q-3-1.5-6 0q-3-1.5-6 0q-3-1.5-6 0Zm9-.75V21m-4 0h8");
}
</style><path class="rcbzet9di"/>`,
		"fallback": "uix-sharp:garden-parasol",
	});
}

export default Component;
