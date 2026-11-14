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

.pa99b8bki {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.sq9xwv0qi {
  d: path("m3 7l9 2.75L21 7m-9 2.75V21.5m0-6.5l5-2l-1.5 5");
}
</style><g class="hntgybcog"><path class="pa99b8bki"/><path class="sq9xwv0qi"/></g>`,
		"fallback": "uix:crane-stance",
	});
}

export default Component;
