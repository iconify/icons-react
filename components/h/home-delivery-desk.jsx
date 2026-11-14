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
		"content": `<style>.ftvgzb9fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.9 13H2.5v-2.5h15.3m.4 0h3.3V13h-.4m-9.7 7H4v-7h10.9M3 21.5h8.4m-5.9-17h8v6h-8Zm4 0V7m8.5 7l3.75 3.25v4.5h-7.5v-4.5Zm0 7.75v-2.5");
}
</style><path class="ftvgzb9fa"/>`,
		"fallback": "uix-sharp:home-delivery-desk",
	});
}

export default Component;
