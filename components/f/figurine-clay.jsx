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
		"content": `<style>.gaqi9jxma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-4 14c0-5 3-7.5 7.5-7.5s7.5 2.5 7.5 7.5m-17 0h19M6 15l-2.5 2M18 15l2.5 2");
}
</style><path class="gaqi9jxma"/>`,
		"fallback": "uix-sharp:figurine-clay",
	});
}

export default Component;
