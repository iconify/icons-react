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
		"content": `<style>.ubppe-ibi {
  d: path("M8.25 9L5 12l3.25 3M5 12h12m2.25-2.25L17 12l2.25 2.25M11 10v4m3-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtp7q1rsx {
  d: path("M3.5 5C8 3.5 16 3.5 20.5 5c2 3.5 2 10.5 0 14c-4.5 1.5-12.5 1.5-17 0c-2-3.5-2-10.5 0-14Z");
}
</style><g class="ulnmmdpxh"><path class="xtp7q1rsx"/><path class="ubppe-ibi"/></g>`,
		"fallback": "uix-sharp:fossil-fish",
	});
}

export default Component;
