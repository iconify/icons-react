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
		"content": `<style>.bxt7fj_zi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5H6l3.75 3H15l4.5-3.75a1.75 1.75 0 0 1 2 2.25L17 21H2.5M7 3h10v9H7Zm5 0v3.5");
}
</style><path class="bxt7fj_zi"/>`,
		"fallback": "uix-sharp:hand-holding-box",
	});
}

export default Component;
