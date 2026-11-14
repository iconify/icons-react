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
		"content": `<style>.j8xreoxsg {
  d: path("M5 14a5 4.5 0 1 0 10 0a5 4.5 0 1 0-10 0ZM3 8v3");
}

.pehfr6elc {
  d: path("M3 9.5h11c3 0 5-1.75 7-3.5v7c-2-1.75-4-3.5-7-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pehfr6elc"/><path class="j8xreoxsg"/></g>`,
		"fallback": "uix-sharp:bugle",
	});
}

export default Component;
