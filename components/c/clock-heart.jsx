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
		"content": `<style>.f66pnquoy {
  d: path("M10.75 6.25v4.5h-3.5M18 21s-3.25-2-3.25-4.25c0-1 .75-1.75 1.75-1.75c.5 0 1.25.5 1.5 1c.25-.5 1-1 1.5-1c1 0 1.75.75 1.75 1.75C21.25 19 18 21 18 21Z");
}

.i93y9wwiw {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 9.25-9.25h-7.25a2 2 0 0 0-2 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i93y9wwiw"/><path class="f66pnquoy"/></g>`,
		"fallback": "uix-sharp:clock-heart",
	});
}

export default Component;
