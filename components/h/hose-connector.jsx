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
		"content": `<style>.n_12l75hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 2.5h-9.5a3 3 0 0 0-3 3V6M20 6h-7.5M5 6h10v5H5Zm1.5 5h7v4.5h-7Zm1.25 4.5v6m4.5-6v6");
}
</style><path class="n_12l75hr"/>`,
		"fallback": "uix-sharp:hose-connector",
	});
}

export default Component;
