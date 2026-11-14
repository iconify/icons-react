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
		"content": `<style>.ggd9ol9zz {
  d: path("M13.25 10.25L15 12l-1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7f59phjj {
  d: path("M10 6h4a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 14 18h-4a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 10 6M2.5 9h4m-4 6h4m11-6h4m-4 6h4M9 12h6");
}
</style><g class="hntgybcog"><path class="v7f59phjj"/><path class="ggd9ol9zz"/></g>`,
		"fallback": "uix:flow-meter",
	});
}

export default Component;
