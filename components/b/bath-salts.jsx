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
		"content": `<style>.jj76m4bek {
  d: path("M3 12.5h18c0 5-4 8.5-9 8.5s-9-3.5-9-8.5Zm7 0l1.5-7l5-1.5l2.25 4.75L18 12.5Z");
}

.qsvpxbchf {
  d: path("M10.75 9L6.5 8L5 12.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jj76m4bek"/><path class="qsvpxbchf"/></g>`,
		"fallback": "uix-sharp:bath-salts",
	});
}

export default Component;
