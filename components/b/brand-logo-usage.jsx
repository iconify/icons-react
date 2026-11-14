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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-rdu8vhq {
  fill: currentColor;
  d: path("M9 9h6v6H9Z");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="v-rdu8vhq"/></g>`,
		"fallback": "uix-sharp:brand-logo-usage",
	});
}

export default Component;
