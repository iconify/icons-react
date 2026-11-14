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

.q7bqzrbwd {
  d: path("M4 3.5v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-15M4 13h16");
}

.szkih0b1u {
  d: path("M8.375 10.25h7.25A1.375 1.375 0 0 1 17 11.625A1.375 1.375 0 0 1 15.625 13h-7.25A1.375 1.375 0 0 1 7 11.625a1.375 1.375 0 0 1 1.375-1.375");
}
</style><g class="hntgybcog"><path class="q7bqzrbwd"/><path class="szkih0b1u"/></g>`,
		"fallback": "uix:floating-roof-tank",
	});
}

export default Component;
