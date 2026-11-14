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
		"content": `<style>.j4bn9tgvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l1.5 6l7 7V17L14 16l1.25 3.5V21L12 20l-3.25 1v-1.5L10 16l-6.5 1v-1.5l7-7ZM12 7v3.5");
}
</style><path class="j4bn9tgvh"/>`,
		"fallback": "uix-sharp:fighter-jet",
	});
}

export default Component;
