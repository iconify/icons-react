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
		"content": `<style>.tud9kjefg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V8m0 9c-2 .5-4-1-4-3.25c2-.25 3.75 1.25 4 3.25Zm0 0c2 .5 4-1 4-3.25c-2-.25-3.75 1.25-4 3.25Zm0-6c-2 .5-4-1-4-3.25C10 7.5 11.75 9 12 11Zm0 0c2 .5 4-1 4-3.25C14 7.5 12.25 9 12 11Zm-1.5-5.5a1.5 2.75 0 1 0 3 0a1.5 2.75 0 1 0-3 0ZM3 21h18M5 4h.01M19 4h.01m.49 6h.01");
}
</style><path class="tud9kjefg"/>`,
		"fallback": "uix-sharp:business-crop-hail",
	});
}

export default Component;
