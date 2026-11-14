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
		"content": `<style>.hjeuxo3vf {
  d: path("m6 16l4-8h6l2 8m-8-8L8.5 5.5h3");
}

.t3gv10b3e {
  d: path("M2 16a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm12 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t3gv10b3e"/><path class="hjeuxo3vf"/></g>`,
		"fallback": "uix-sharp:category-cycling",
	});
}

export default Component;
