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
		"content": `<style>.dbqv-ngch {
  d: path("M10 5.5h10l1.5 3.25L20 12l1.5 3.25L20 18.5H10ZM10 9H4a1.5 1.5 0 0 0-1.5 1.5v3A1.5 1.5 0 0 0 4 15h6");
}

.gt-ie4b2u {
  d: path("M16.25 8.25L13.5 12.5h3l-2.75 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dbqv-ngch"/><path class="gt-ie4b2u"/></g>`,
		"fallback": "uix-sharp:energy-bar",
	});
}

export default Component;
