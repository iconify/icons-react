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
		"content": `<style>.tomofebck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h8v5h-8ZM5 14v-2.5h4m4.5 2.5h8v5h-8Zm2.5 0v-2.5h4M13 6h7.5m-2.25-2.25L20.5 6l-2.25 2.25");
}
</style><path class="tomofebck"/>`,
		"fallback": "uix-sharp:curling-takeout",
	});
}

export default Component;
