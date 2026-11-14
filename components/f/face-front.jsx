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
		"content": `<style>.tikf0zxws {
  d: path("M7.5 8a4.5 5.5 0 1 0 9 0a4.5 5.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yar0dm-me {
  d: path("M3 21.5c0-3.25 3-4.75 7-5.25V13m4 0v3.25c4 .5 7 2 7 5.25");
}
</style><g class="ulnmmdpxh"><path class="tikf0zxws"/><path class="yar0dm-me"/></g>`,
		"fallback": "uix-sharp:face-front",
	});
}

export default Component;
