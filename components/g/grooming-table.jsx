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
		"content": `<style>.o6haz77bt {
  d: path("M3 13h18m-9 0v7.5m-4 0h8m3-7.5V4h-6v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-2frotgu {
  d: path("M11 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="o6haz77bt"/><path class="y-2frotgu"/></g>`,
		"fallback": "uix-sharp:grooming-table",
	});
}

export default Component;
