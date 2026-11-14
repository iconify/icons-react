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
		"content": `<style>.va0k-ubec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17c0-2 5-3.5 10-3c4 .5 7 2.5 8.5 4.5C17 19.5 9 20 5 19.5C3.75 19.25 3 18 3 17Zm0-5c5-2 11-2 18.5 1.5M12 7V2.5M9.5 5L12 2.5L14.5 5");
}
</style><path class="va0k-ubec"/>`,
		"fallback": "uix-sharp:bernoulli-wing",
	});
}

export default Component;
