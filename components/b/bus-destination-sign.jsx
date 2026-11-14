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
		"content": `<style>.k443gabdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v17H4Zm0 6h16m-11.5-3h7M8 15h.01M16 15h.01M7.5 19.5v2m9-2v2");
}
</style><path class="k443gabdu"/>`,
		"fallback": "uix-sharp:bus-destination-sign",
	});
}

export default Component;
