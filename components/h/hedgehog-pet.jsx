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
		"content": `<style>.z2igf3bts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 15L15 9l-.5-3.5l-2 2L11 4.25L9.25 7.5L6.5 5.75l-.25 3.5l-3.25 2l1.5 2.5l-1 3.75H17q3.75 0 4.5-2.5ZM7 17.5V20m8-2.5V20m1.25-6h.01");
}
</style><path class="z2igf3bts"/>`,
		"fallback": "uix-sharp:hedgehog-pet",
	});
}

export default Component;
