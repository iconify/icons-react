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
		"content": `<style>.grz8rcwgj {
  d: path("M8.75 9.5C8.5 9 8 8.75 7.5 8.75c-.75 0-1.25.5-1.25 1.25c0 1.5 2.75 1.25 2.75 3c0 .75-.75 1.25-1.5 1.25q-.75 0-1.5-.75m1.5-6v8m10.5-6c-.25-.5-.75-.75-1.25-.75c-.75 0-1.25.5-1.25 1.25c0 1.5 2.75 1.25 2.75 3c0 .75-.75 1.25-1.5 1.25q-.75 0-1.5-.75m1.5-6v8");
}

.s0qi76b-m {
  d: path("M11 3a9 9 0 0 0 0 18Zm2 0a9 9 0 0 1 0 18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s0qi76b-m"/><path class="grz8rcwgj"/></g>`,
		"fallback": "uix-sharp:copay",
	});
}

export default Component;
