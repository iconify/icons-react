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
		"content": `<style>.ad86cdbnr {
  fill: currentColor;
  d: path("M4.25 5h4.5v4.5h-4.5Zm14.8 4.5h-3.8V5h4.5v4.3");
}

.ot-xk0bbq {
  d: path("M10.75 20.7v.3h-8.5V3h8.5v16.3m2.5-7.1V3h8.5v8.3M4.5 12h4m-4 2.75H7m8.5-3.25h1.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydcdh_b1s {
  d: path("M14 15h7.5m-2-2l2 2l-2 2m2 3H14m2-2l-2 2l2 2");
}
</style><g class="ulnmmdpxh"><path class="ot-xk0bbq"/><path class="ad86cdbnr"/><path class="ydcdh_b1s"/></g>`,
		"fallback": "uix-sharp:compare-list",
	});
}

export default Component;
