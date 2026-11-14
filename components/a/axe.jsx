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
		"content": `<style>.gibbinwgp {
  d: path("M16.25 6.25L14 2.75q-3.75.5-4.25 4.25L13 9.25");
}

.qcgfb0dhz {
  d: path("m16.907 5.472l2.121 2.121L5.593 21.028l-2.121-2.121Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qcgfb0dhz"/><path class="gibbinwgp"/></g>`,
		"fallback": "uix-sharp:axe",
	});
}

export default Component;
