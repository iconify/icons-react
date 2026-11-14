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
		"content": `<style>.c-2y4ebjl {
  d: path("M14.75 10.25c-3.25 0-5.5.75-5 3m0 0V18m4.5 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM18 16v2m0 2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2j66nb6l {
  d: path("M7 18v-3.25c-2.25-1.5-3-3.5-3-5.75c0-3.5 2.75-6.25 6.25-6.25C13.5 2.75 16 5 16 8.25l1.25 3a.6.6 0 0 1 .064.208");
}
</style><g class="ulnmmdpxh"><path class="y2j66nb6l"/><path class="c-2y4ebjl"/></g>`,
		"fallback": "uix-sharp:anaphylaxis",
	});
}

export default Component;
