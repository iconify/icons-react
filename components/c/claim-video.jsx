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
		"content": `<style>.guzsmacqu {
  d: path("m9 9.5l2.5 1V12c0 1.4-1 2.1-2.5 2.75C7.5 14.1 6.5 13.4 6.5 12v-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zr4fqjbaq {
  d: path("M2.5 6h13v12h-13Zm13 4.5l6-3.5v10l-6-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="zr4fqjbaq"/><path class="guzsmacqu"/></g>`,
		"fallback": "uix-sharp:claim-video",
	});
}

export default Component;
