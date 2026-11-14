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
		"content": `<style>.ekyg-0h8d {
  d: path("M16.25 13a4.5 4.5 0 1 1-3-3a2.25 2.25 0 0 0 3 3ZM10 12.75h.01m3.99 3h.01m-3.26.75h.01");
}

.nfl06b7ml {
  d: path("M2.5 2.5h19v19h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nfl06b7ml"/><path class="ekyg-0h8d"/></g>`,
		"fallback": "uix-sharp:browser-cookie",
	});
}

export default Component;
