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
		"content": `<style>.h3-8vi6zb {
  d: path("M9.75 5.25L7 8l2.75 2.75");
}

.s2q29qqkn {
  d: path("M17 21.5v-19M17 17c0-6-5-9-10-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s2q29qqkn"/><path class="h3-8vi6zb"/></g>`,
		"fallback": "uix-sharp:entry-ramp-left",
	});
}

export default Component;
