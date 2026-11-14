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
		"content": `<style>.fzryzxb-d {
  d: path("M17.5 2.5v19m0-4c0-4-2.5-5.5-5-8L6 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pf5k29b9w {
  d: path("M6 8.5V3h5.5");
}
</style><g class="hntgybcog"><path class="fzryzxb-d"/><path class="pf5k29b9w"/></g>`,
		"fallback": "uix:exit-ramp-left",
	});
}

export default Component;
