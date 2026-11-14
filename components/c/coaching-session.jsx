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

.oxphakbjd {
  d: path("M7 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.qp4-g8qli {
  d: path("M9 6.5h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a6.5 6.5 0 1 1-6-4");
}
</style><g class="hntgybcog"><path class="qp4-g8qli"/><path class="oxphakbjd"/></g>`,
		"fallback": "uix:coaching-session",
	});
}

export default Component;
