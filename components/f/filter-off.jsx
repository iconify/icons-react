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
		"content": `<style>.ag8n3bblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 4.5h12.1l-5.423 6.675M14 17.892V19l-4 2v-7.02M3.5 3.5l17 17");
}
</style><path class="ag8n3bblg"/>`,
		"fallback": "uix-sharp:filter-off",
	});
}

export default Component;
