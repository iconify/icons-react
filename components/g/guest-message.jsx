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
		"content": `<style>.gereoebmz {
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 7c0-1.4 1.75-2.25 4-2.25s4 .85 4 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tnsp6xb2l {
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v10a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V18H5.5A2.5 2.5 0 0 1 3 15.5Z");
}
</style><g class="hntgybcog"><path class="tnsp6xb2l"/><path class="gereoebmz"/></g>`,
		"fallback": "uix:guest-message",
	});
}

export default Component;
