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
		"content": `<style>.bu-y_q2yb {
  d: path("M6 15.25v3.25a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-3.25M7 2.5h5v3H7Z");
}

.e3t7nhbad {
  d: path("M19.5 21.5V10.25a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v.25a2 2 0 0 0 2 2h9.25v9M3 21.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e3t7nhbad"/><path class="bu-y_q2yb"/></g>`,
		"fallback": "uix-sharp:capsule-coffee-machine",
	});
}

export default Component;
