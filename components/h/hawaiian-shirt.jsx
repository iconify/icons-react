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
		"content": `<style>.f48ghfbvu {
  d: path("M12 12a1.75 1.75 0 1 1 2.5 2.5A1.75 1.75 0 1 1 12 17a1.75 1.75 0 1 1-2.5-2.5A1.75 1.75 0 1 1 12 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4o5x8b_s {
  d: path("M9 3L4.5 4.5l-2 6l3.5 1V21h12v-9.5l3.5-1l-2-6L15 3l-3 4.5Z");
}
</style><g class="ulnmmdpxh"><path class="v4o5x8b_s"/><path class="f48ghfbvu"/></g>`,
		"fallback": "uix-sharp:hawaiian-shirt",
	});
}

export default Component;
