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
		"content": `<style>.cxmd3fufi {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.o7gia1o_i {
  d: path("M10 8.5h4v13h-4Zm-2.5 5l9-2m-9 6l9-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cxmd3fufi"/><path class="o7gia1o_i"/></g>`,
		"fallback": "uix-sharp:ice-screw",
	});
}

export default Component;
