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
		"content": `<style>.lo8dg-gps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15v4.5h-15ZM8 7.5v14l4-3.5l4 3.5v-14");
}
</style><path class="lo8dg-gps"/>`,
		"fallback": "uix-sharp:bookmark-ribbon",
	});
}

export default Component;
