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
		"content": `<style>.zuakx0b9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5c3 0 3.25 4.25.25 4.25c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 6.5-.25 6.5m8-17c3 0 3.25 4.25.25 4.25c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 6.5-.25 6.5");
}
</style><path class="zuakx0b9d"/>`,
		"fallback": "uix-sharp:hair-curly",
	});
}

export default Component;
