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
		"content": `<style>.a-t3qjbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h11v11h-11ZM16 12h5.5v5.5H16ZM6.5 9.25h.01m2.99 0h.01M5.25 12h.01M8 12h.01m2.74 0h.01M6.5 14.75h.01m2.99 0h.01m9.24 0h.01");
}
</style><path class="a-t3qjbda"/>`,
		"fallback": "uix-sharp:concentration",
	});
}

export default Component;
