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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.ga65sabzo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n4xhjlbtp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 11v9h12v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xil7tiu3o {
  d: path("M6 11v9h12v-9");
}
</style><g class="s0phu2bbs"><path class="ga65sabzo"/><path class="n4xhjlbtp"/><path class="a6e_o0bju"/><path class="xil7tiu3o"/></g>`,
		"fallback": "iconmind:home-duotone-bold",
	});
}

export default Component;
