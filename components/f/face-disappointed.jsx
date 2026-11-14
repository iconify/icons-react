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
		"content": `<style>.ahtvirbkt {
  d: path("M8.5 17q3.5-2.5 7 0");
}

.edyx9ybfx {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM7 9.25l2.75-1.5M17 9.25l-2.75-1.5M8.5 12h.01m6.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="edyx9ybfx"/><path class="ahtvirbkt"/></g>`,
		"fallback": "uix-sharp:face-disappointed",
	});
}

export default Component;
