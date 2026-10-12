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

.oqi1e6b0v {
  d: path("M3.75 7.75H15.5a1 1 0 0 1 1 1.04L16 18.5a2.75 2.75 0 0 1-2.75 2.75H6a2.75 2.75 0 0 1-2.75-2.75l-.5-9.71a1 1 0 0 1 1-1.04M2.9 10.5h13.5");
}

.w7sgkoblo {
  d: path("M7.6 13.5h4a1 1 0 0 1 1 1v2.25a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V14.5a1 1 0 0 1 1-1m7.9-5.75L17.69 6");
}

.wft9rcgmo {
  cx: 19.25px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="oqi1e6b0v"/><path class="w7sgkoblo"/><circle class="wft9rcgmo"/></g>`,
		"fallback": "iconoven:evidence-bag",
	});
}

export default Component;
