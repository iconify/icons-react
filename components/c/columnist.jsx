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
		"content": `<style>.wymraugdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 16c0-2.5 2.5-4.5 5.5-4.5s5.5 2 5.5 4.5m-11 3h19M16 19l.5-2.75l3.5-3.5l1.5 1.5l-3.5 3.5Z");
}
</style><path class="wymraugdm"/>`,
		"fallback": "uix-sharp:columnist",
	});
}

export default Component;
