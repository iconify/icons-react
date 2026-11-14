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
		"content": `<style>.h2b5n5bdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C2.5 6.25 5.75 3 10 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H17v1.536m-4 4.44V21.5m1.75-3.5l2 2L21 15.75");
}
</style><path class="h2b5n5bdj"/>`,
		"fallback": "uix-sharp:head-check",
	});
}

export default Component;
