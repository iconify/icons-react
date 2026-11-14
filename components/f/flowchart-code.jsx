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
		"content": `<style>.h75-zkbiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8V7h-8ZM12 8.75L15.25 12L12 15.25L8.75 12ZM13.5 17h8v4.5h-8Zm-7-10v5h2.25m6.5 0h2.25v5");
}
</style><path class="h75-zkbiy"/>`,
		"fallback": "uix-sharp:flowchart-code",
	});
}

export default Component;
