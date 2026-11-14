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
		"content": `<style>.ajj_rkb-h {
  d: path("M2.5 8.5h13v13h-13Zm6.5 3v7M5.5 15h7");
}

.reo4gac-q {
  d: path("M8.5 5.5v-1a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="reo4gac-q"/><path class="ajj_rkb-h"/></g>`,
		"fallback": "uix-sharp:duplicate-plus",
	});
}

export default Component;
