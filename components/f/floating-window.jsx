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
		"content": `<style>.kay_u5bwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17V15h-17Zm0 4h17m-15 13.25a6.5 1.75 0 1 0 13 0a6.5 1.75 0 1 0-13 0Z");
}
</style><path class="kay_u5bwd"/>`,
		"fallback": "uix-sharp:floating-window",
	});
}

export default Component;
