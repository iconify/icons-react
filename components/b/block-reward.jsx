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
		"content": `<style>.f8uwz1n7s {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1-rqjo-p {
  d: path("M8.5 14L7 21.5l5-2.5l5 2.5l-1.5-7.5M12 5.75l.882 2.036l2.209.21l-1.664 1.468l.483 2.165L12 10.5l-1.91 1.129l.483-2.165l-1.664-1.468l2.209-.21Z");
}
</style><g class="ulnmmdpxh"><path class="f8uwz1n7s"/><path class="x1-rqjo-p"/></g>`,
		"fallback": "uix-sharp:block-reward",
	});
}

export default Component;
