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
		"content": `<style>.bex2d4d2t {
  d: path("m7.5 9.5l4.5 1l4.5-1m-4.5 1v3m-2.5 4l2.5-4l2.5 4");
}

.dsypibcji {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 6.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dsypibcji"/><path class="bex2d4d2t"/></g>`,
		"fallback": "uix-sharp:accessibility-menu",
	});
}

export default Component;
