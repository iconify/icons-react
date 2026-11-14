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
		"content": `<style>.nf6rzyb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5v-3h3m-3 7v3h3m3.5 0h3M9.166 10.945l7.779-7.779l3.889 3.889l-7.779 7.779Zm2.475-2.475l3.889 3.889M18 14.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}
</style><path class="nf6rzyb9y"/>`,
		"fallback": "uix-sharp:ai-erase",
	});
}

export default Component;
