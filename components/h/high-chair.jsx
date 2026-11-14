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
		"content": `<style>.p9gdwacva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5h10v6H7Zm0 6v9.5M17 11v9.5m-13-6h16m-15 6h14");
}
</style><path class="p9gdwacva"/>`,
		"fallback": "uix-sharp:high-chair",
	});
}

export default Component;
