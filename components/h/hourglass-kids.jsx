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
		"content": `<style>.n28228bdr {
  d: path("M4.5 3h15m-15 18h15M6.5 3v2.5C6.5 9 12 10 12 12s-5.5 3-5.5 6.5V21m11-18v2.5C17.5 9 12 10 12 12s5.5 3 5.5 6.5V21");
}

.q1asy9bbx {
  d: path("M6.75 18q5.25-3.5 10.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n28228bdr"/><path class="q1asy9bbx"/></g>`,
		"fallback": "uix-sharp:hourglass-kids",
	});
}

export default Component;
