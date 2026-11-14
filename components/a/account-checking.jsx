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
		"content": `<style>.a1npssi8d {
  d: path("M9.75 9.25C10.5 8 11 8 11.25 8.75s.75.75 1.5-.25m8.25 5h-3.5a2.25 2.25 0 0 0 0 4.5H21m-3-2.25h.01");
}

.spur8dbsa {
  d: path("M3 11h18v10.5H3Zm3.5 0l2.25-8.25l7.75 2L14.75 11M10 6l4.5 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="spur8dbsa"/><path class="a1npssi8d"/></g>`,
		"fallback": "uix-sharp:account-checking",
	});
}

export default Component;
