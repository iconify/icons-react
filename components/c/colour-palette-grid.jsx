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
		"content": `<style>.y8gqsl-mz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v7.5H3Zm10.5 0H21v7.5h-7.5ZM3 13.5h7.5V21H3Zm14.25 0c2 2.5 3.25 3.75 3.25 5a3.25 3.25 0 0 1-6.5 0c0-1.25 1.25-2.5 3.25-5Z");
}
</style><path class="y8gqsl-mz"/>`,
		"fallback": "uix-sharp:colour-palette-grid",
	});
}

export default Component;
