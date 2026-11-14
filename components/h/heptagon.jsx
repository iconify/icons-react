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
		"content": `<style>.mzmhy49_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l7.427 3.577l1.835 8.037l-5.14 6.445H7.878l-5.14-6.445l1.835-8.037Z");
}
</style><path class="mzmhy49_d"/>`,
		"fallback": "uix-sharp:heptagon",
	});
}

export default Component;
