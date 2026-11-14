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
		"content": `<style>.lftj-ccbr {
  d: path("M6.5 17q1.75-1.5 3.5 0t3.5 0t4 0");
}

.qa6xa8btt {
  d: path("M3 7h18v13H3Zm6 0V4.5h6V7m-3 2.5V14m-2.25-2.25h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qa6xa8btt"/><path class="lftj-ccbr"/></g>`,
		"fallback": "uix-sharp:first-aid-kit-marine",
	});
}

export default Component;
