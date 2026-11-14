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
		"content": `<style>.y72nj7ihl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 7.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm-3.25 14v-1c0-3.25 3.25-5.5 7.5-5.5c.856 0 1.63.081 2.369.244M15 18h6");
}
</style><path class="y72nj7ihl"/>`,
		"fallback": "uix-sharp:contact-remove",
	});
}

export default Component;
