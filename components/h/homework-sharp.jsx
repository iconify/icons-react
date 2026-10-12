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
		"content": `<style>.hm48-bsji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.75h8.75v18.5H6zm-2.25 4.5H7.5M3.75 12H7.5m-3.75 4.75H7.5m11-11.25h2.25v11.75l-.45.89l-.72 1.47l-.45.89l-.45-.89l-.73-1.47l-.45-.89V5.5zm-1 3.25h3.25");
}
</style><path class="hm48-bsji"/>`,
		"fallback": "iconoven:homework-sharp",
	});
}

export default Component;
