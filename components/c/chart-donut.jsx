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
		"content": `<style>.doc4jcbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.5a8 8 0 1 0 8 8H15A4.5 4.5 0 1 1 10.5 9Zm2.75-2.75a8 8 0 0 1 8 8h-3.5a4.5 4.5 0 0 0-4.5-4.5Z");
}
</style><path class="doc4jcbre"/>`,
		"fallback": "uix-sharp:chart-donut",
	});
}

export default Component;
