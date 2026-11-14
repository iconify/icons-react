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
		"content": `<style>.l1fvag-td {
  d: path("M9.75 9.5a2.25 5 0 1 0 4.5 0a2.25 5 0 1 0-4.5 0Z");
}

.njr_habtr {
  d: path("M2.5 19.5q9.5-4 19 0M7 9.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="njr_habtr"/><path class="l1fvag-td"/></g>`,
		"fallback": "uix-sharp:earth-rise",
	});
}

export default Component;
