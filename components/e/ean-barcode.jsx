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
		"content": `<style>.r9u1rub3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v16M6 4v16M9.5 4v16M12 4v16m2.5-16v16M18 4v16m2.5-16v16");
}
</style><path class="r9u1rub3h"/>`,
		"fallback": "uix-sharp:ean-barcode",
	});
}

export default Component;
