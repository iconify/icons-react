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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7fs11bcv {
  d: path("M7 10c2-3.5 6-3.5 8 0l2.5-2.25v4.5L15 10c-2 3.5-6 3.5-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="v7fs11bcv"/></g>`,
		"fallback": "uix-sharp:fish-finder",
	});
}

export default Component;
