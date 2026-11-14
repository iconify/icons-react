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
		"content": `<style>.kg6_trbsj {
  d: path("M14 12.75c-.25-.5-1-.75-2-.75s-2 .5-2 1.5c0 2 4 1.25 4 3.25c0 .75-1 1.25-2 1.25s-1.75-.25-2-.75m.75-11.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 0C9 3.25 5.75 3 5.75 5s3.25 2.25 5 .5Zm2.5 0c1.75-2.25 5-2.5 5-.5s-3.25 2.25-5 .5Zm-2 1L10 8.75m2.75-2.25L14 8.75");
}

.o-o9zybvr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-o9zybvr"/><path class="kg6_trbsj"/></g>`,
		"fallback": "uix-sharp:bonus",
	});
}

export default Component;
