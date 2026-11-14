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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv-bjdoin {
  d: path("M13.3 21.5H3.5v-19H14v10.8M7.25 5.5h3m10.5 13A2.75 2.75 0 1 1 18 15.75");
}
</style><g class="ulnmmdpxh"><path class="zv-bjdoin"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:gadget-extended-warranty",
	});
}

export default Component;
