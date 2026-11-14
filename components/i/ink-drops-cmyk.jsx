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
		"content": `<style>.in_gjybmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5Zm9 0s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5Zm-9 10.5s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5Zm9 0s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5Z");
}
</style><path class="in_gjybmc"/>`,
		"fallback": "uix-sharp:ink-drops-cmyk",
	});
}

export default Component;
