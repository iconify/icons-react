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
		"content": `<style>.wom3hnbaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.5v15m4-15v15m4-15v15m4-15v15m-15.5-3l19-9");
}
</style><path class="wom3hnbaz"/>`,
		"fallback": "uix-sharp:frequency-table",
	});
}

export default Component;
