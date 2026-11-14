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
		"content": `<style>.jxk-88q1w {
  d: path("M5 10.5V6c0-1.5 1-2.5 2.5-2.5H13c1.5 0 2.5 1 2.5 2.5v4.5");
}

.or2cctbbu {
  d: path("M2.5 17v-5.5c0-1 .75-1.5 1.5-1.5s1 .5 1 1.5V14h10.5v-2.5c0-1 .5-1.5 1.25-1.5s1.25.5 1.25 1.5V17Zm1.25 0v3.5m13-3.5v3.5m3.75 1V7c0-1.75-2.25-1.75-2.25-.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxk-88q1w"/><path class="or2cctbbu"/></g>`,
		"fallback": "uix-sharp:elderly-care",
	});
}

export default Component;
