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
		"content": `<style>.ef19ip9io {
  d: path("m14 12l-1 1.75h-2L10 12l1-1.75h2Zm0 0l4.25 7.25M13 13.75L8.75 21M11 13.75H2.75M10 12L5.75 4.75m5.25 5.5L15.25 3M13 10.25h8.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ef19ip9io"/></g>`,
		"fallback": "uix-sharp:aperture-narrow",
	});
}

export default Component;
