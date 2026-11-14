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
		"content": `<style>.a051g9b-u {
  d: path("M5.75 8.75a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}

.glmzfbo4x {
  d: path("M9.5 8.75a2.5 6.25 0 1 0 5 0a2.5 6.25 0 1 0-5 0m-3.75 0h12.5M12 15v2.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-7 0h7m4 0h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a051g9b-u"/><path class="glmzfbo4x"/></g>`,
		"fallback": "uix:globe-network",
	});
}

export default Component;
