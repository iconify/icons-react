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
		"content": `<style>.f1iyce6_y {
  d: path("m12 2.5l8.25 4.75v9.5L12 21.5l-8.25-4.75v-9.5Z");
}

.sp7i96bpk {
  d: path("M7.25 12a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f1iyce6_y"/><path class="sp7i96bpk"/></g>`,
		"fallback": "uix-sharp:benzene-ring",
	});
}

export default Component;
