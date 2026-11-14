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

.n0xd2bcvz {
  d: path("M6.75 9h1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 6.75 9");
}

.p73xu4bns {
  d: path("M2.5 19V6h19v13m-19-7h19m-19 4h19");
}
</style><g class="hntgybcog"><path class="p73xu4bns"/><path class="n0xd2bcvz"/></g>`,
		"fallback": "uix:daybed",
	});
}

export default Component;
