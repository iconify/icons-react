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
		"content": `<style>.m3tj9wb-b {
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.uhnvmywfq {
  d: path("M10.75 13.5L10 19H7.5v2.5h9V19H14l-.75-5.5M12 5.25L13.25 8L12 10.75L10.75 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m3tj9wb-b"/><path class="uhnvmywfq"/></g>`,
		"fallback": "uix-sharp:binnacle",
	});
}

export default Component;
