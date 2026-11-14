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
		"content": `<style>.iwfm9ojfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18v-4h-3V13h-3V3.5H9V13H6v3.5H3ZM9 13h6m-9 3.5h12");
}
</style><path class="iwfm9ojfg"/>`,
		"fallback": "uix-sharp:foundation",
	});
}

export default Component;
