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
		"content": `<style>.xdtw98bbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12c2.5-.5 4-2.5 6.5-2.5h4.5a1.25 1.25 0 0 1 2.5 0l5.5 1.5v1.5H15c-2 1.75-5 1.75-7 1.5s-3.5-1.5-5.5-2Zm6 2l-1 3m6-3.25l1 3.25");
}
</style><path class="xdtw98bbv"/>`,
		"fallback": "uix-sharp:crocodile",
	});
}

export default Component;
