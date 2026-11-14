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
		"content": `<style>.s9u6d8bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h11.5v5H4Zm-1 5h13.75v5H3Zm8.35 10.75H2.5v-5.75h17v.6M14.75 18l2 2L21 15.75");
}
</style><path class="s9u6d8bsh"/>`,
		"fallback": "uix-sharp:book-stack-check",
	});
}

export default Component;
