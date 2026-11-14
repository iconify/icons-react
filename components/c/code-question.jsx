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
		"content": `<style>.a1dfxryef {
  d: path("M8.25 7.5L5.5 10.25L8.25 13m5-5.5L16 10.25l-1.705 1.705m-.424.424L13.25 13m2.25 3a2.5 2.5 0 1 1 3.5 2.25c-.75.25-1 .75-1 1.5M18 22h.01");
}

.e4duekthy {
  d: path("M15.2 19H2.5V3.5h19v8.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4duekthy"/><path class="a1dfxryef"/></g>`,
		"fallback": "uix-sharp:code-question",
	});
}

export default Component;
