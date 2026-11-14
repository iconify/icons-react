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
		"content": `<style>.dps_k9bgq {
  fill: currentColor;
  d: path("M10 17a4.5 4.5 0 0 0 9 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwtupfbyx {
  d: path("M4 3h8a4 4 0 0 1 4 4v1.5h-3V7a1 1 0 0 0-1-1H4Zm10.5 8.5C16.5 14 19 16 19 17a4.5 4.5 0 0 1-9 0c0-1 2.5-3 4.5-5.5");
}
</style><g class="hntgybcog"><path class="nwtupfbyx"/><path class="dps_k9bgq"/></g>`,
		"fallback": "uix:discoloured-water",
	});
}

export default Component;
