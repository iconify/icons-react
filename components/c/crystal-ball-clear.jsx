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
		"content": `<style>.c-nce6bdl {
  d: path("M8.25 16.5h7.5L18 21H6ZM7.5 10a4.5 4.5 0 0 1 2.961-4.229");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="c-nce6bdl"/></g>`,
		"fallback": "uix-sharp:crystal-ball-clear",
	});
}

export default Component;
