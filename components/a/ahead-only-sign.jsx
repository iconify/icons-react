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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwvx7b6tn {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v6a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 12V6A3.5 3.5 0 0 1 8 2.5m4 13v6m0-8.75V5.5");
}

.zowafbbhr {
  d: path("M8.75 8.75L12 5.5l3.25 3.25");
}
</style><g class="hntgybcog"><path class="wwvx7b6tn"/><path class="zowafbbhr"/></g>`,
		"fallback": "uix:ahead-only-sign",
	});
}

export default Component;
