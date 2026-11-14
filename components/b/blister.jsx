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
		"content": `<style>.b_87fby_x {
  d: path("M2.5 13.5H7c0-9 10-9 10 0h4.5M5 17.5h14");
}

.r_avhhbyl {
  d: path("M10.5 11.5c0-1 .5-1.75 1.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b_87fby_x"/><path class="r_avhhbyl"/></g>`,
		"fallback": "uix-sharp:blister",
	});
}

export default Component;
