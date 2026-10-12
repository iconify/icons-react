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
		"content": `<style>.zsiaw9b0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.24 19.12a4 2.9-20 1 0 7.52-2.74a4 2.9-20 1 0-7.52 2.74Zm7.52-2.74V2.75");
}
</style><path class="zsiaw9b0u"/>`,
		"fallback": "iconoven:half-note-sharp",
	});
}

export default Component;
