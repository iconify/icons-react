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
		"content": `<style>.rydli66-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.371 6.379l3.668-.78l3.119 14.673l-3.668.779Zm6.358-1.351l3.668-.78l3.119 14.672l-3.668.78Zm6.358-1.352l3.668-.779l3.119 14.672l-3.668.78Z");
}
</style><path class="rydli66-e"/>`,
		"fallback": "uix-sharp:fish-fingers",
	});
}

export default Component;
