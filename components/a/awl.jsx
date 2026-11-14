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
		"content": `<style>.lzn-ribge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.05 18.414l6.364-6.364l3.536 3.536l-6.364 6.364Zm8.2-4.664L21 3");
}
</style><path class="lzn-ribge"/>`,
		"fallback": "uix-sharp:awl",
	});
}

export default Component;
