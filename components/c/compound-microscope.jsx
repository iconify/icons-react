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
		"content": `<style>.x-vutobwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h4v9h-4Zm4 3.5C19 6 20 14 16 21M5 21h14m-8.5-9.5v1.75M6 16h12");
}
</style><path class="x-vutobwz"/>`,
		"fallback": "uix-sharp:compound-microscope",
	});
}

export default Component;
