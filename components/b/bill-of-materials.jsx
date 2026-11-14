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
		"content": `<style>.kopz6bc2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.75h6v5H9Zm3 5v6.5m-7.25 0v-3h14.5v3m-16.75 0H7v5H2.5Zm7.25 0h4.5v5h-4.5Zm7.25 0h4.5v5H17Z");
}
</style><path class="kopz6bc2s"/>`,
		"fallback": "uix-sharp:bill-of-materials",
	});
}

export default Component;
