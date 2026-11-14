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
		"content": `<style>.o12id6u7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5v-18M10 21v-7l5.5-4.5L21 14v7ZM2.5 6h3M4 6c4.5 0 7.5 1.5 9.5 5");
}
</style><path class="o12id6u7j"/>`,
		"fallback": "uix-sharp:fiber-drop",
	});
}

export default Component;
