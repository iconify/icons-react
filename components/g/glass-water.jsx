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
		"content": `<style>.iecifzbfw {
  d: path("M6 5h12l-1.5 15.5h-9Z");
}

.ubcuo7btv {
  d: path("M6.75 11Q9.5 9.5 12 11t5.25 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iecifzbfw"/><path class="ubcuo7btv"/></g>`,
		"fallback": "uix-sharp:glass-water",
	});
}

export default Component;
