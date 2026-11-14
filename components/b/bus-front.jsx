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
		"content": `<style>.dx9ddjb1s {
  d: path("M7.5 8.5h9v5h-9ZM8 16h.01M16 16h.01M7.5 19v2.5m9-2.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtqj5bb3g {
  d: path("M4.5 2.5h15V19h-15Zm3.5 3h8");
}
</style><g class="ulnmmdpxh"><path class="xtqj5bb3g"/><path class="dx9ddjb1s"/></g>`,
		"fallback": "uix-sharp:bus-front",
	});
}

export default Component;
