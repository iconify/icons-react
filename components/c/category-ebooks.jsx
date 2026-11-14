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
		"content": `<style>.dui_717ao {
  d: path("M4.5 2h15v20h-15Z");
}

.j1nsj8btl {
  d: path("M12 8.5C10.5 7.25 9 7 7.25 7v7.5c1.75 0 3.25.25 4.75 1.5c1.5-1.25 3-1.5 4.75-1.5V7C15 7 13.5 7.25 12 8.5Zm0 0V16m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dui_717ao"/><path class="j1nsj8btl"/></g>`,
		"fallback": "uix-sharp:category-ebooks",
	});
}

export default Component;
