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
		"content": `<style>.utrxuhbbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.179 8.285l4.594-4.594l3.536 3.536l-4.596 4.596m-3.96 3.96l-1.874 1.874l-4.95 1.414l1.414-4.95l1.876-1.876M3.5 3.5l17 17");
}
</style><path class="utrxuhbbg"/>`,
		"fallback": "uix-sharp:edit-off",
	});
}

export default Component;
