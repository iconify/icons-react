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
		"content": `<style>.hiu57r88u {
  d: path("M9.5 19v-3c0-2 5-2 5 0v3m-11-6.5h17");
}

.ryupnmnrb {
  d: path("M3.5 19C3.5 11 7 6 12 6s8.5 5 8.5 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ryupnmnrb"/><path class="hiu57r88u"/></g>`,
		"fallback": "uix-sharp:igloo-hotel",
	});
}

export default Component;
