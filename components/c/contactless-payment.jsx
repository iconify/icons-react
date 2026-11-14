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
		"content": `<style>.pl0jav50w {
  d: path("M10.121 9.879a3 3 0 0 1 0 4.242m2.475-5.978a6 6 0 0 1 0 7.714");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz7-9bcsc {
  d: path("M2.5 5h19v14h-19ZM8 12h.01");
}
</style><g class="ulnmmdpxh"><path class="uz7-9bcsc"/><path class="pl0jav50w"/></g>`,
		"fallback": "uix-sharp:contactless-payment",
	});
}

export default Component;
