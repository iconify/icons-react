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
		"content": `<style>.so9-7foge {
  d: path("M6.5 9a6.5 6.5 0 0 1 13 0c0 3.5-3 4.5-3.5 7.5A4 4 0 0 1 8.5 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsv8rz2fp {
  d: path("M10.5 10.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM11 12l-5.5 4");
}
</style><g class="ulnmmdpxh"><path class="so9-7foge"/><path class="xsv8rz2fp"/></g>`,
		"fallback": "uix-sharp:earpiece",
	});
}

export default Component;
