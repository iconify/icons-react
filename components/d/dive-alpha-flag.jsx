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
		"content": `<style>.wp4r_2jbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h15l-3.5 4.5L20 13H5Zm0-1v18.5M11.5 4v9");
}
</style><path class="wp4r_2jbq"/>`,
		"fallback": "uix-sharp:dive-alpha-flag",
	});
}

export default Component;
