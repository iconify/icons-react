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
		"content": `<style>.ccwz0bbfl {
  d: path("M6.5 11c2.5-6 5-6 7-2.5s4.5 3 7-2.5");
}

.ccwzn6o3i {
  d: path("M6.5 17c2.5-6 5-6 7-2.5s4.5 3 7-2.5");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="ccwz0bbfl"/><path class="ccwzn6o3i"/></g>`,
		"fallback": "uix-sharp:chart-series",
	});
}

export default Component;
