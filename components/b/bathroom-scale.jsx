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
		"content": `<style>.saz4y0b1r {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi8wsfb5d {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0l1.5-1.75m-7 9.25h3m5 0h3");
}
</style><g class="ulnmmdpxh"><path class="saz4y0b1r"/><path class="xi8wsfb5d"/></g>`,
		"fallback": "uix-sharp:bathroom-scale",
	});
}

export default Component;
