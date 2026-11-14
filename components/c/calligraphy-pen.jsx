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
		"content": `<style>.s83m05bmc {
  d: path("M8.5 2.5h7v4h-7Zm3.5 15l-5.5-6l2.5-5h6l2.5 5Z");
}

.u_jhvhb9s {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 1.5v5M4 21c4-2 12 2 16 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s83m05bmc"/><path class="u_jhvhb9s"/></g>`,
		"fallback": "uix-sharp:calligraphy-pen",
	});
}

export default Component;
