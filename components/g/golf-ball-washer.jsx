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
		"content": `<style>.pscjkuumj {
  d: path("M7.5 14a6 6 0 1 1 9 0");
}

.r1ynu1bqr {
  d: path("M3 14q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M3 18.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M12 7h.01m-2.26 3h.01m4.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pscjkuumj"/><path class="r1ynu1bqr"/></g>`,
		"fallback": "uix-sharp:golf-ball-washer",
	});
}

export default Component;
