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
		"content": `<style>.wa4wkx2-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h6.5v9H4Zm9.5 0H20v9h-6.5Zm-6.75 0v9m9.5-9v9M4 16.5h16l-2.25-2.25M20 19.5H4l2.25 2.25");
}
</style><path class="wa4wkx2-a"/>`,
		"fallback": "uix-sharp:book-swap",
	});
}

export default Component;
