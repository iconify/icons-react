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
		"content": `<style>.v3k0rub6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21L5 15.5h14l2.5 5.5ZM12 7c-1.5-1.25-5.5-1-5.5 3.25c0 2.75 2 5.25 3.5 5.25c1 0 1.25-.5 2-.5s1 .5 2 .5c1.5 0 3.5-2.5 3.5-5.25c0-4.25-4-4.5-5.5-3.25Zm0 0l1-3M8 18.25h8");
}
</style><path class="v3k0rub6i"/>`,
		"fallback": "uix-sharp:checkout-scale-scanner",
	});
}

export default Component;
