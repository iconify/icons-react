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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqdq4bf0v {
  d: path("M6.5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 8a3 3 0 0 1 6 0m3.5-7h3.5M15 14h2.5");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="vqdq4bf0v"/></g>`,
		"fallback": "uix-sharp:contact-record",
	});
}

export default Component;
