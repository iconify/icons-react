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
		"content": `<style>.o5wzn9b0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 9l4 3.5L12 7l4 5.5L20 9l-1.25 10H5.25Zm8-5h.01M3.25 6h.01m17.49 0h.01M6 15.75h12");
}
</style><path class="o5wzn9b0l"/>`,
		"fallback": "uix-sharp:birthday-crown",
	});
}

export default Component;
