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
		"content": `<style>.cm6pnsbjh {
  d: path("M15.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-13-3.5h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kcdjkrbra {
  d: path("M4.25 5.5h8A1.75 1.75 0 0 1 14 7.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 4.25 5.5M14 9h4l3.5 3.5V16H14m-9 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="kcdjkrbra"/><path class="cm6pnsbjh"/></g>`,
		"fallback": "uix:container-truck",
	});
}

export default Component;
