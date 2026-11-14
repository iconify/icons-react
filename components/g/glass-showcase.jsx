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
		"content": `<style>.fmj6nob3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v17h-15Zm2 17v2m11-2v2M4.5 8.25h15m-15 5.5h15m-5.5 3.5l2.5-1.5M13.25 6l2.5-1.5");
}
</style><path class="fmj6nob3f"/>`,
		"fallback": "uix-sharp:glass-showcase",
	});
}

export default Component;
