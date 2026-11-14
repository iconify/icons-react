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
		"content": `<style>.zkf054tdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.875 3.556L21.75 12l-4.875 8.444h-9.75L2.25 12l4.875-8.444Z");
}
</style><path class="zkf054tdb"/>`,
		"fallback": "uix-sharp:hexagon-rounded",
	});
}

export default Component;
