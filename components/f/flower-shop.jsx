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
		"content": `<style>.i64jzwpvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L4.5 3h15L21 7.5M4.5 8.75V21m15-12.25V21M3 7.5a4 4 0 0 0 6 0a4 4 0 0 0 6 0a4 4 0 0 0 6 0M12 12a1.75 1.75 0 0 1 2.5 1.5a1.75 1.75 0 0 1 0 3A1.75 1.75 0 0 1 12 18a1.75 1.75 0 0 1-2.5-1.5a1.75 1.75 0 0 1 0-3A1.75 1.75 0 0 1 12 12Zm0 6v3");
}
</style><path class="i64jzwpvb"/>`,
		"fallback": "uix-sharp:flower-shop",
	});
}

export default Component;
