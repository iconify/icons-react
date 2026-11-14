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
		"content": `<style>.pan3f_chh {
  d: path("M5.5 11.5c-3-5.5-.5-9 4-9S15.5 6 13 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4qb67hob {
  d: path("M9 10h11.5v5H14a5 5 0 1 1-5-5Z");
}
</style><g class="ulnmmdpxh"><path class="y4qb67hob"/><path class="pan3f_chh"/></g>`,
		"fallback": "uix-sharp:bootcamp",
	});
}

export default Component;
