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

.vnfo6ebmy {
  fill: currentColor;
  d: path("M17.75 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.xaf3lmb0l {
  d: path("M4.25 16.5a9 5-30 1 1 15.5-9a9 5-30 1 1-15.5 9");
}
</style><g class="hntgybcog"><path class="xaf3lmb0l"/><path class="vnfo6ebmy"/></g>`,
		"fallback": "uix:electron",
	});
}

export default Component;
