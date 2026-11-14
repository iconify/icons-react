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
		"content": `<style>.xigq2l1my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5h17v13h-17Zm0 4h17m-8.5-4v13m0-13c-2-5-6-4.5-4 0m4 0c2-5 6-4.5 4 0");
}
</style><path class="xigq2l1my"/>`,
		"fallback": "uix-sharp:gift-wrap",
	});
}

export default Component;
