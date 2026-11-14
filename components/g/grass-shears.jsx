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
		"content": `<style>.v8blemb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2.25 7L21 18.5M11 5.75L18.5 21");
}
</style><path class="v8blemb2b"/>`,
		"fallback": "uix-sharp:grass-shears",
	});
}

export default Component;
