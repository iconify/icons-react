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
		"content": `<style>.y3eku78_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 12.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM9 2.5h6V7H9Zm-6.5 14h6V21h-6Zm13 0h6V21h-6ZM12 10.25V7m-1.75 6.75L7 16.5m6.75-2.75L17 16.5");
}
</style><path class="y3eku78_p"/>`,
		"fallback": "uix-sharp:federated-learning",
	});
}

export default Component;
