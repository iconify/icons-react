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
		"content": `<style>.gu5_5bcph {
  d: path("m8 7.5l-2.25 3.25L8 14m3-6.5l2.25 3.25L11 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s-_gubcwr {
  d: path("M6.5 2.5h6A3.5 3.5 0 0 1 16 6v9.5a3.5 3.5 0 0 1-3.5 3.5h-6A3.5 3.5 0 0 1 3 15.5V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="s-_gubcwr"/><path class="gu5_5bcph"/></g>`,
		"fallback": "uix:code-embed",
	});
}

export default Component;
