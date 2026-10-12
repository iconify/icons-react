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
		"content": `<style>.ntv2oobaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.01 20.01l-6.77-6.77l-.99-.99H8.5v-9h7v9h5.25l-.99.99l-6.77 6.77L12 21z");
}
</style><path class="ntv2oobaq"/>`,
		"fallback": "iconoven:arrow-big-down-line-sharp",
	});
}

export default Component;
