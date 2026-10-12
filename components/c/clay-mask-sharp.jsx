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
		"content": `<style>.pfpz9pmno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h17.5a8.75 8.25 0 0 1-17.5 0Zm8.65-2.95l1.2.9l.6.45l.45-.6l.9-1.2l.45-.6l-.6-.45l-1.2-.9l-.6-.45l-.45.6l-.9 1.2l-.45.6zm3.3-3.15l2.1-2.8M8 16h8");
}
</style><path class="pfpz9pmno"/>`,
		"fallback": "iconoven:clay-mask-sharp",
	});
}

export default Component;
