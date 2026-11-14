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
		"content": `<style>.ir5opjblc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5a8 8 0 1 1 16 0m-8 0l4-6m-4 6h.01");
}
</style><path class="ir5opjblc"/>`,
		"fallback": "uix-sharp:engagement-score",
	});
}

export default Component;
