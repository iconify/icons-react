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
		"content": `<style>.xji4p_xic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.9 4h12.6l-5.612 6.907M14 17.892V19.5L10 21v-7.02M3.5 3.5l17 17");
}
</style><path class="xji4p_xic"/>`,
		"fallback": "uix-sharp:content-filter",
	});
}

export default Component;
