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
		"content": `<style>.k__fngbun {
  d: path("M7.5 5.5h9A2.5 2.5 0 0 1 19 8v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19V8a2.5 2.5 0 0 1 2.5-2.5Zm2 0v-1a2.5 2.5 0 0 1 5 0v1");
}

.of_ixpzqs {
  d: path("M8 13.5h8v5H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k__fngbun"/><path class="of_ixpzqs"/></g>`,
		"fallback": "uix-sharp:backpack-school",
	});
}

export default Component;
