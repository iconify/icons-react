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
		"content": `<style>.l92s5-bec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17m3-9.5h13v9h-13Zm2.75 2.75H13m-4.75 3.5h2.25m2.75 0h2.5");
}
</style><path class="l92s5-bec"/>`,
		"fallback": "uix-sharp:cheque-capture-front",
	});
}

export default Component;
