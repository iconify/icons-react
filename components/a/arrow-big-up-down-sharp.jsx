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
		"content": `<style>.jnpll1bjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.99 3.99l6.77 6.77l.99.99H15.5v9h-7v-9H3.25l.99-.99l6.77-6.77L12 3z");
}
</style><path class="jnpll1bjf"/>`,
		"fallback": "iconoven:arrow-big-up-down-sharp",
	});
}

export default Component;
