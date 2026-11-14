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

.nkfxw4bjg {
  d: path("M5.5 3h11L21 7.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3");
}

.qvdu02blm {
  d: path("M16.5 3v2.5a2 2 0 0 0 2 2H21M8.5 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6 21c0-3.25 2.5-5 5.5-5s5.5 1.75 5.5 5");
}
</style><g class="hntgybcog"><path class="nkfxw4bjg"/><path class="qvdu02blm"/></g>`,
		"fallback": "uix:avatar-sticker",
	});
}

export default Component;
