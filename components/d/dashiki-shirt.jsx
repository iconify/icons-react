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
		"content": `<style>.a200cj3pi {
  d: path("M8 3L2.5 6.5L4 11l1.5-.75V21h13V10.25L20 11l1.5-4.5L16 3a4 3 0 0 1-8 0");
}

.h93dddxmq {
  d: path("m8.5 13l1.75-1.75L12 13l1.75-1.75L15.5 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a200cj3pi"/><path class="h93dddxmq"/></g>`,
		"fallback": "uix:dashiki-shirt",
	});
}

export default Component;
