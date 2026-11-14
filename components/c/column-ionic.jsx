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
		"content": `<style>.znn1cy1xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5A2.5 2.5 0 1 1 8 6h8a2.5 2.5 0 1 1 2.5 2.5M8 6v11.5M16 6v11.5m-11.5 0h15v3h-15Z");
}
</style><path class="znn1cy1xi"/>`,
		"fallback": "uix-sharp:column-ionic",
	});
}

export default Component;
