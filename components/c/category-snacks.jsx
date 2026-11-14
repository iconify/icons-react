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
		"content": `<style>.cb_dyubyh {
  d: path("m4.5 4.5l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2l1.5-2l1.5 2c2 4.5 2 10.5 0 15l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2l-1.5 2l-1.5-2c-2-4.5-2-10.5 0-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnyp1tboz {
  d: path("M7.5 12a4.5 3 0 1 0 9 0a4.5 3 0 1 0-9 0Z");
}
</style><g class="ulnmmdpxh"><path class="cb_dyubyh"/><path class="xnyp1tboz"/></g>`,
		"fallback": "uix-sharp:category-snacks",
	});
}

export default Component;
