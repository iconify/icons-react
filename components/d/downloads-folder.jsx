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

.ovwensyti {
  d: path("M9.25 13.75L12 16.5l2.75-2.75");
}

.u5eqz8lll {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9 2.5v7");
}
</style><g class="hntgybcog"><path class="u5eqz8lll"/><path class="ovwensyti"/></g>`,
		"fallback": "uix:downloads-folder",
	});
}

export default Component;
