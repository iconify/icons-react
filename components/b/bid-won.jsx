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
		"content": `<style>.va7q68kcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10v6a5 5 0 0 1-10 0Zm0 2H4v2a3 3 0 0 0 3 3m10-5h3v2a3 3 0 0 1-3 3m-5 4v2.3m0 2.4v1.3m-4 0h5m1.75-2.5l2 2L21 15.75");
}
</style><path class="va7q68kcf"/>`,
		"fallback": "uix-sharp:bid-won",
	});
}

export default Component;
