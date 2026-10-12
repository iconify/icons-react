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
		"content": `<style>.bpt8-n4_z {
  d: path("M3.75 18.5h11a4.75 4.75 0 0 0 0-9.5H4.25");
}

.hm6ht6b6s {
  d: path("M7.75 12.5L4.25 9l3.5-3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bpt8-n4_z"/><path class="hm6ht6b6s"/></g>`,
		"fallback": "iconoven:arrow-u-turn-left-sharp",
	});
}

export default Component;
