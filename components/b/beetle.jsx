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
		"content": `<style>.psxwdrbqc {
  d: path("M6.5 13.5a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zagn_oftx {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 9v11.5M7.25 10L4 7.5M6.5 14H3m4.75 4L4.5 21m12.25-11L20 7.5M17.5 14H21m-4.75 4l3.25 3");
}
</style><g class="ulnmmdpxh"><path class="psxwdrbqc"/><path class="zagn_oftx"/></g>`,
		"fallback": "uix-sharp:beetle",
	});
}

export default Component;
