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
		"content": `<style>.n_rgdn_mb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5L12 3l9 5.5Zm3.5 2.75v6.25m5.5-6.25v3.8m0 .9v1.55m5.5-6.25v1.4M3 20.5h9.7m8.3.5l-5.5-5.5m0 5v-5h5");
}
</style><path class="n_rgdn_mb"/>`,
		"fallback": "uix-sharp:cash-flow-financing",
	});
}

export default Component;
