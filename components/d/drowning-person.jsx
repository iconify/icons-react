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
		"content": `<style>.f7-3zbrtp {
  d: path("M3 16.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0m-18 4q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}

.sj89s3bqu {
  d: path("M8 16.5L5.25 12a1.5 1.5 0 0 1 2.5-1.5l.75 1V6a1.5 1.5 0 0 1 3 0V4.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1 3 0v10.25M11.5 6v5m3-4.5V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sj89s3bqu"/><path class="f7-3zbrtp"/></g>`,
		"fallback": "uix-sharp:drowning-person",
	});
}

export default Component;
