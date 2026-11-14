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
		"content": `<style>.lj4sg7c-r {
  d: path("M8.5 7h5l-6.25 5h7.5L6 17M5.5 2.5V7m11-4.5V7m-.5 8.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.rjy1_p8qj {
  d: path("M5 21L9.5 3h3l2.291 9.164");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rjy1_p8qj"/><path class="lj4sg7c-r"/></g>`,
		"fallback": "uix-sharp:cell-tower-climber",
	});
}

export default Component;
