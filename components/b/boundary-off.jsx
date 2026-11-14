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
		"content": `<style>.v7g9qx41a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.9 6h6.6l4.692 11.262M14.1 18H2.5l3.385-8.123M3.5 3.5l17 17");
}
</style><path class="v7g9qx41a"/>`,
		"fallback": "uix-sharp:boundary-off",
	});
}

export default Component;
