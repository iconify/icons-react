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
		"content": `<style>.skz2h1-0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4H18l-5.5 7v6L9 19v-8Zm11.25 14l2 2L21 15.75");
}
</style><path class="skz2h1-0f"/>`,
		"fallback": "uix-sharp:filter-check",
	});
}

export default Component;
