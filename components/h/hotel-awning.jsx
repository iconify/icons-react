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
		"content": `<style>.sdsaexbfx {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-16.5 5V21h15v-9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbqrwzfbg {
  d: path("M9.5 21v-6a2.5 2.5 0 0 1 5 0v6");
}
</style><g class="ulnmmdpxh"><path class="sdsaexbfx"/><path class="zbqrwzfbg"/></g>`,
		"fallback": "uix-sharp:hotel-awning",
	});
}

export default Component;
