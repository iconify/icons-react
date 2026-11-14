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
		"content": `<style>.tba-6ialp {
  d: path("M3 6.5q4.5-1.5 9 0t9 0M9.5 21c-2.5-2.5 2.5-5.5 0-8c-2-2 .5-3 0-3.5m5 11.5c2.5-3-2.5-5.5 0-8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wquh2jb1d {
  d: path("M3 4v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4");
}
</style><g class="ulnmmdpxh"><path class="wquh2jb1d"/><path class="tba-6ialp"/></g>`,
		"fallback": "uix-sharp:aquarium-plant",
	});
}

export default Component;
