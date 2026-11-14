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
		"content": `<style>.hppncrbsz {
  d: path("M4 14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5M12 2.5V9M8.75 5.75L12 9l3.25-3.25");
}

.lbs947byy {
  d: path("M4 14c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5v5c0 1.4-3.6 2.5-8 2.5S4 20.4 4 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lbs947byy"/><path class="hppncrbsz"/></g>`,
		"fallback": "uix-sharp:data-load",
	});
}

export default Component;
