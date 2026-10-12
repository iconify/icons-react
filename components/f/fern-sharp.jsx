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
		"content": `<style>.on54uhn6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V4m0 13l-4-3m4 3l4-3m-4-2L8 9m4 3l4-3m-4-2L8 4m4 3l4-3");
}
</style><path class="on54uhn6d"/>`,
		"fallback": "iconoven:fern-sharp",
	});
}

export default Component;
