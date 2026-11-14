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
		"content": `<style>.h2ocgfbvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 6.75v3m0 4.5v3M11 4.5h9M11 12h7m-7 7.5h4.5");
}
</style><path class="h2ocgfbvj"/>`,
		"fallback": "uix-sharp:git-log",
	});
}

export default Component;
