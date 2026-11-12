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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzp6r4b6x {
  d: path("M14.5 12H22M2 12H9.5");
}

.qysd0ccsw {
  d: path("M20.0002 15.6842C20.0002 19 17.7345 22 16.0002 22C14.7427 22 13.6725 21.0298 12.9682 18.9998M4.14404 8.31564C4.14404 4.99985 6.40978 1.99985 8.14404 1.99985C10.4128 1.99985 12.0723 5.15791 12.0723 12C12.0723 13.0933 12.1146 14.0925 12.1951 14.9998");
}
</style><g class="ipq1z-bjh"><path class="jzp6r4b6x"/><path class="qysd0ccsw"/></g>`,
		"fallback": "solar:colour-tuneing-broken",
	});
}

export default Component;
