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
		"content": `<style>.hhm3ies2w {
  d: path("M2.5 21.5v-13a6.5 6.5 0 0 1 13 0V13c0 2.5 1.5 3.5 6 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrpah0byk {
  d: path("M6 21.5v-13a3 3 0 0 1 6 0V14c0 4.5 3 6 9.5 6");
}
</style><g class="hntgybcog"><path class="hhm3ies2w"/><path class="yrpah0byk"/></g>`,
		"fallback": "uix:hairpin-turn",
	});
}

export default Component;
