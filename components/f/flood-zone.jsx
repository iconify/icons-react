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
		"content": `<style>.mfo0vvp8a {
  d: path("M14.25 16.5q1.25-1.25 2.5 0t2.5 0t2.5 0m-7.5 3.5q1.25-1.25 2.5 0t2.5 0t2.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz3wdrbcd {
  d: path("M10.917 19.363L8.5 18.5l-6 2.5V5.5l6-2.5l7 2.5l6-2.5v10.067M8.5 3v15.5m7-13v7.4");
}
</style><g class="ulnmmdpxh"><path class="uz3wdrbcd"/><path class="mfo0vvp8a"/></g>`,
		"fallback": "uix-sharp:flood-zone",
	});
}

export default Component;
