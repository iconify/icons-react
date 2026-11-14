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
		"content": `<style>.a5p7s_bnf {
  d: path("M8 17c-2 0-4.5-.5-4.5-2.5V13l.5-3l1.75 1.75l1.75-1.5L8 13c3-.5 6-5 9-5c2 0 2.5 2.5 1.5 5C16 14 12 15 8 17Z");
}

.lhzf1klnf {
  d: path("M9 16.5L5.5 20h-3m15-6.5V20m1.25-11c1.75-1.5 2.75-3.5 1.75-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a5p7s_bnf"/><path class="lhzf1klnf"/></g>`,
		"fallback": "uix-sharp:cat-stretch",
	});
}

export default Component;
