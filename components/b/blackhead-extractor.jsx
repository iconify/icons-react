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
		"content": `<style>.oia3a5u7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1 2.5L12 12m-1.098-1.023l2.121 2.121l-7.425 7.425l-2.121-2.121Z");
}
</style><path class="oia3a5u7s"/>`,
		"fallback": "uix-sharp:blackhead-extractor",
	});
}

export default Component;
