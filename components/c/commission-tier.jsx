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
		"content": `<style>.lrg_5qb8d {
  d: path("M2.5 20.5h19v-11h-6v4H9V17H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyspn0b0r {
  d: path("M15 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="lrg_5qb8d"/><path class="yyspn0b0r"/></g>`,
		"fallback": "uix-sharp:commission-tier",
	});
}

export default Component;
