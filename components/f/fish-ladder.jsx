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
		"content": `<style>.w36r0rjmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h6v-4h6v-4h7m-3-6.5C16 3 10.5 3 8 7L4.5 4v6L8 7c2.5 4 8 4 10.5 0Zm-4-.25h.01");
}
</style><path class="w36r0rjmr"/>`,
		"fallback": "uix-sharp:fish-ladder",
	});
}

export default Component;
