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
		"content": `<style>.rur0mzb4g {
  d: path("M18.495 9.25A7.5 7.5 0 1 1 12 5.5");
}

.sl3hvyb8w {
  d: path("m9 2.5l3 3l-3 3m-.5 3l1-1v5m3-5H16v5h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rur0mzb4g"/><path class="sl3hvyb8w"/></g>`,
		"fallback": "uix-sharp:forward-10",
	});
}

export default Component;
