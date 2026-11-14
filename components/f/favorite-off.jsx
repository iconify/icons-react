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
		"content": `<style>.l7rty6ong {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.459 6.518L12 3.25l2.645 5.609l6.152.783l-3.713 3.492m-2.623 5.216L12 17l-5.437 2.983l1.157-6.092l-4.517-4.249l2.172-.276M3.5 3.5l17 17");
}
</style><path class="l7rty6ong"/>`,
		"fallback": "uix-sharp:favorite-off",
	});
}

export default Component;
