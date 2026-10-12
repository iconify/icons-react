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
		"content": `<style>.an8in5bao {
  d: path("M3.75 4.75c8 0 13.25 4.75 13.25 14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.paivv5b1d {
  d: path("m13 15.25l4 4l4-4");
}
</style><g class="hntgybcog"><path class="an8in5bao"/><path class="paivv5b1d"/></g>`,
		"fallback": "iconoven:arrow-curve-down",
	});
}

export default Component;
