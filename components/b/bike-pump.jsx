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
		"content": `<style>.z-o_s5blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6h4v15h-4ZM4 3h11M9.5 3v3m-5 15H14M11.5 8.5c5.5 0 7 3.5 7 8.5M17 17h3v4h-3Z");
}
</style><path class="z-o_s5blw"/>`,
		"fallback": "uix-sharp:bike-pump",
	});
}

export default Component;
