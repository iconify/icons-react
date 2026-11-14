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
		"content": `<style>.w2f09ckip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 13a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3-8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8-1.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-3 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><path class="w2f09ckip"/>`,
		"fallback": "uix-sharp:constellation-search",
	});
}

export default Component;
