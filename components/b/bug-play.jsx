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

.otr0ybb6y {
  d: path("M6.25 6.25a2.75 2.75 0 0 1 5.5 0M9 5.5V18M4 9.5H2.25M4 13H2.25M14 9.5h1.75M14 13h1.75M17 16l4.75 2.75L17 21.5Z");
}

.tpmxkdvtz {
  d: path("M4 10.5a5 5 0 0 1 10 0V13a5 5 0 0 1-10 0Z");
}
</style><g class="hntgybcog"><path class="tpmxkdvtz"/><path class="otr0ybb6y"/></g>`,
		"fallback": "uix:bug-play",
	});
}

export default Component;
