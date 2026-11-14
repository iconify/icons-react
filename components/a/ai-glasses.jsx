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
		"content": `<style>.mo4h9ec1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 0q1.5-2 3 0m4-12.5q.25 2.5 2.75 2.75q-2.5.25-2.75 2.75q-.25-2.5-2.75-2.75Q17.25 5.5 17.5 3Z");
}
</style><path class="mo4h9ec1p"/>`,
		"fallback": "uix-sharp:ai-glasses",
	});
}

export default Component;
