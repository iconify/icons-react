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

.vpbsalurj {
  d: path("M5.5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.y_z08rozu {
  d: path("M3 16V7a2 2 0 0 1 2-2h10l6 6v5Zm0-5.5h14");
}
</style><g class="hntgybcog"><path class="y_z08rozu"/><path class="vpbsalurj"/></g>`,
		"fallback": "uix:field-trip",
	});
}

export default Component;
