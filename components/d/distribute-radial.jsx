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
		"content": `<style>.cxa9rlbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v5h-5Zm0 14h5v5h-5Zm-7-7h5v5h-5Zm14 0h5v5h-5ZM12 12h.01");
}
</style><path class="cxa9rlbrg"/>`,
		"fallback": "uix-sharp:distribute-radial",
	});
}

export default Component;
