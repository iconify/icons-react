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
		"content": `<style>.fekeny_wa {
  d: path("M8.5 3L12 9.5V21m3.5-18l-1.25 6.5L18 13Z");
}

.poya2xbms {
  d: path("m8.5 3l-5 2.5V21h17V5.5l-5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="poya2xbms"/><path class="fekeny_wa"/></g>`,
		"fallback": "uix-sharp:coat-lining",
	});
}

export default Component;
