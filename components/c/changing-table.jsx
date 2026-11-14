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
		"content": `<style>.jfrvcnbyr {
  d: path("M4 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM11.75 5H20v4h-8.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3vel8dvu {
  d: path("M3 9h18v3H3Zm2 3v8.5M19 12v8.5");
}
</style><g class="ulnmmdpxh"><path class="w3vel8dvu"/><path class="jfrvcnbyr"/></g>`,
		"fallback": "uix-sharp:changing-table",
	});
}

export default Component;
