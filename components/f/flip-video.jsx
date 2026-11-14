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
		"content": `<style>.gt2mtvb5t {
  d: path("m9.5 5.5l6 3.5l-6 3.5ZM2.75 16h18.5M5 13.75L2.75 16L5 18.25m14-4.5L21.25 16L19 18.25");
}

.l43qwpsei {
  d: path("M4 10.8V3h16v7.8M16.8 20H7.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l43qwpsei"/><path class="gt2mtvb5t"/></g>`,
		"fallback": "uix-sharp:flip-video",
	});
}

export default Component;
