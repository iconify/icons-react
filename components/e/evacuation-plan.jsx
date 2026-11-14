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
		"content": `<style>.a7290z_hy {
  d: path("m3.5 11l2-1.75L8 9l2.75 2.25M16.25 9L19 12l-2.75 3");
}

.tr-t3t6bj {
  d: path("M13.5 2.5h8.25v19H13.5ZM7 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 9l-1.5 5l3 3v4m-3-7l-1.75 4l-2.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tr-t3t6bj"/><path class="a7290z_hy"/></g>`,
		"fallback": "uix-sharp:evacuation-plan",
	});
}

export default Component;
