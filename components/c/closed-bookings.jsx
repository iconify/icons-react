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
		"content": `<style>.asf-0gpsd {
  d: path("M3.5 4.5h17v17h-17Zm4.5-2v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyewitsbk {
  d: path("m8.5 15l2.5 2.5l4.5-5");
}
</style><g class="ulnmmdpxh"><path class="asf-0gpsd"/><path class="yyewitsbk"/></g>`,
		"fallback": "uix-sharp:closed-bookings",
	});
}

export default Component;
