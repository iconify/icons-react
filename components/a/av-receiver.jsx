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
		"content": `<style>.g7rhlspag {
  d: path("M9.75 8.75h4.5v4.5h-4.5Zm-5 2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm12 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.lvjtrn2nj {
  d: path("M2.5 5h19v12h-19ZM5 17v2.5M19 17v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lvjtrn2nj"/><path class="g7rhlspag"/></g>`,
		"fallback": "uix-sharp:av-receiver",
	});
}

export default Component;
