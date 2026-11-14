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
		"content": `<style>.ih75qgb5m {
  d: path("M14.608 17.5H3L11.5 3l5.108 8.713M11.5 8.5V12m0 2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz-oo6b5p {
  d: path("m15 14l3 3l3-3m-3 3v4.5m-1.75-1.75L18 21.5l1.75-1.75");
}
</style><g class="ulnmmdpxh"><path class="ih75qgb5m"/><path class="uz-oo6b5p"/></g>`,
		"fallback": "uix-sharp:incident-merge",
	});
}

export default Component;
