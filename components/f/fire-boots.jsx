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
		"content": `<style>.vs53ywzvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5h6V6h-6ZM10 6v15H4a1.5 1.5 0 0 1-1.5-1.5V19a3 3 0 0 1 3-3V6m7.75-3.5h6V6h-6ZM14 6v15h6a1.5 1.5 0 0 0 1.5-1.5V19a3 3 0 0 0-3-3V6");
}
</style><path class="vs53ywzvs"/>`,
		"fallback": "uix-sharp:fire-boots",
	});
}

export default Component;
