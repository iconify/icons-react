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
		"content": `<style>.bh4j4-b9d {
  d: path("M8.5 16v-3h5v3m0-3L15 9.25h1.5m-1.5 0l-.75-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.llayhcb1x {
  d: path("m13.856 3.856l6.288 6.288a2.625 2.625 0 0 1 0 3.712l-6.288 6.288a2.625 2.625 0 0 1-3.712 0l-6.288-6.288a2.625 2.625 0 0 1 0-3.712l6.288-6.288a2.625 2.625 0 0 1 3.712 0");
}
</style><g class="hntgybcog"><path class="llayhcb1x"/><path class="bh4j4-b9d"/></g>`,
		"fallback": "uix:animal-crossing",
	});
}

export default Component;
