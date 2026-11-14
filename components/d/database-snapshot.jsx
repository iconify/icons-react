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
		"content": `<style>.bery7-8kf {
  d: path("M6.5 12a5.5 2 0 0 0 11 0m-15-4.5V5A2.5 2.5 0 0 1 5 2.5h2.5m9 0H19A2.5 2.5 0 0 1 21.5 5v2.5m0 9V19a2.5 2.5 0 0 1-2.5 2.5h-2.5m-9 0H5A2.5 2.5 0 0 1 2.5 19v-2.5");
}

.giac5pzbr {
  d: path("M6.5 7.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}

.px7uwxlby {
  d: path("M6.5 7.5v9a5.5 2 0 0 0 11 0v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="giac5pzbr"/><path class="px7uwxlby"/><path class="bery7-8kf"/></g>`,
		"fallback": "uix-sharp:database-snapshot",
	});
}

export default Component;
