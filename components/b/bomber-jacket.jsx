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
		"content": `<style>.mjumdiw1y {
  d: path("M9 3L5 4.5C3.75 5 3 6 3 7.5V19h3.5l1-8v10h9V11l1 8H21V7.5c0-1.5-.75-2.5-2-3L15 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y08mj6bui {
  d: path("M9 3q3 3.5 6 0m-3 1.75V21m-4.5-2.5h9M3 17h3.75m10.5 0H21");
}
</style><g class="ulnmmdpxh"><path class="mjumdiw1y"/><path class="y08mj6bui"/></g>`,
		"fallback": "uix-sharp:bomber-jacket",
	});
}

export default Component;
