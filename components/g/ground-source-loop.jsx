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
		"content": `<style>.odyyd5bsc {
  d: path("M5.75 5L8 7.25L10.25 5m3.5 1.25L16 4l2.25 2.25");
}

.ty76xvbob {
  d: path("M2.5 10h19M8 4v11a4 4 0 0 0 8 0V4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ty76xvbob"/><path class="odyyd5bsc"/></g>`,
		"fallback": "uix-sharp:ground-source-loop",
	});
}

export default Component;
