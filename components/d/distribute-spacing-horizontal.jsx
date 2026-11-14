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
		"content": `<style>.qtftr0tzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h4v12H3Zm7-2.5h4v17h-4ZM17 8h4v8h-4Z");
}
</style><path class="qtftr0tzz"/>`,
		"fallback": "uix-sharp:distribute-spacing-horizontal",
	});
}

export default Component;
