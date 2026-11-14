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
		"content": `<style>.xg-csdb0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5L12 4l9 5.5Zm2 0V20M19 9.5V20M3 20h18m-11-6h4v6h-4Z");
}
</style><path class="xg-csdb0d"/>`,
		"fallback": "uix-sharp:bank-building-small",
	});
}

export default Component;
