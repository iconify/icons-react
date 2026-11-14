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
		"content": `<style>.n_d146n7o {
  d: path("M9.75 7.5A2.25 2.25 0 1 1 12 9.75V12");
}

.odu8bqrge {
  d: path("m12 11.5l8 6.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n_d146n7o"/><path class="odu8bqrge"/></g>`,
		"fallback": "uix-sharp:clothes-hanger",
	});
}

export default Component;
