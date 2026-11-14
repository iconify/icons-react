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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz7wzfbtv {
  d: path("m2.5 19.5l1.5-7L8 6l5-1.5L18 7l3 5.5l.5 7Z");
}

.zapppkbwb {
  d: path("m8 6l2 5.5l5 1");
}
</style><g class="ulnmmdpxh"><path class="yz7wzfbtv"/><path class="zapppkbwb"/></g>`,
		"fallback": "uix-sharp:bauxite",
	});
}

export default Component;
