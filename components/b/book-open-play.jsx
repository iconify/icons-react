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
		"content": `<style>.l0vdp8bww {
  d: path("M19 13.976V4.75c-2.5-.5-5.75 0-8 1.5c-2.25-1.5-5.5-2-8.5-1.5V18.5c3-.5 6.25 0 8.5 1.5a9.5 9.5 0 0 1 2.239-1.077M11 6.25V20");
}

.mg9d0citl {
  d: path("m16 15.5l5.5 3l-5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l0vdp8bww"/><path class="mg9d0citl"/></g>`,
		"fallback": "uix-sharp:book-open-play",
	});
}

export default Component;
