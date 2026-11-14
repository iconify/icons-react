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
		"content": `<style>.yltm46bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5h4A1.5 1.5 0 0 1 14.5 7v10a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 17V7A1.5 1.5 0 0 1 9 5.5Zm2 0v-3h6m-6 16v3h6M7.5 14h7");
}
</style><path class="yltm46bul"/>`,
		"fallback": "uix-sharp:gas-separator",
	});
}

export default Component;
