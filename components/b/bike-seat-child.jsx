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
		"content": `<style>.j_6i03sve {
  d: path("M9 16.5h10l-2.5-7.75");
}

.p_4jj0nkl {
  d: path("M4 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm12.5-7.75H4.25A1.25 1.25 0 0 1 3 7.5V3.75A1.25 1.25 0 0 1 4.25 2.5H5a1.25 1.25 0 0 1 1.25 1.25v2H11A1.25 1.25 0 0 1 12.25 7v1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p_4jj0nkl"/><path class="j_6i03sve"/></g>`,
		"fallback": "uix-sharp:bike-seat-child",
	});
}

export default Component;
