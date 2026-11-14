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
		"content": `<style>.ot2sk4bsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 12h18v5H3Zm2 5v3m14-3v3");
}
</style><path class="ot2sk4bsv"/>`,
		"fallback": "uix-sharp:category-home-furniture",
	});
}

export default Component;
