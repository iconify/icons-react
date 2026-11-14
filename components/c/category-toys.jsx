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
		"content": `<style>.b21c4wcra {
  fill: currentColor;
  d: path("M10.5 14.75a1.5 1 0 1 0 3 0a1.5 1 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vp7v0ke7b {
  d: path("M4.75 9.5A3 3 0 1 1 8.5 5.75a8 8 0 0 1 7 0a3 3 0 1 1 3.75 3.75a8 8 0 1 1-14.5 0Z");
}

.y-cp03tjp {
  d: path("M8.25 16.5a3.75 2.75 0 1 0 7.5 0a3.75 2.75 0 1 0-7.5 0Zm.75-6h.01m5.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="vp7v0ke7b"/><path class="y-cp03tjp"/><path class="b21c4wcra"/></g>`,
		"fallback": "uix-sharp:category-toys",
	});
}

export default Component;
