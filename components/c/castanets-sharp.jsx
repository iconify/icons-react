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
		"content": `<style>.krpsndb_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h7.5A3.75 4.5 0 0 1 3 14Zm10.5 0H21a3.75 4.5 0 0 1-7.5 0ZM8 14l4-5m4 5l-4-5m0 0a2 2 0 1 1 0-4a2 2 0 1 1 0 4");
}
</style><path class="krpsndb_o"/>`,
		"fallback": "iconoven:castanets-sharp",
	});
}

export default Component;
