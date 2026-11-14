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
		"content": `<style>.d03yrbcko {
  d: path("M4 2.5h16L18.5 11q-6.5 4.5-13 0Zm5.5 0V13m5-10.5V13M4.75 7h14.5");
}

.fe4hj_bmu {
  d: path("M3 16.75q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0m-15.75 4q2.25-1.5 4.5 0t4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d03yrbcko"/><path class="fe4hj_bmu"/></g>`,
		"fallback": "uix-sharp:ghost-net",
	});
}

export default Component;
