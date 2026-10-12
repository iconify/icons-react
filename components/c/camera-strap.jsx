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

.pyjl6mbru {
  width: 16px;
  height: 11px;
  x: 4px;
  y: 9px;
  rx: 2px;
}

.z81zjju8n {
  d: path("M15 14.5a3 3 0 1 1-6 0a3 3 0 1 1 6 0M6.5 9L9 3.75h6L17.5 9");
}
</style><g class="hntgybcog"><rect class="pyjl6mbru"/><path class="z81zjju8n"/></g>`,
		"fallback": "iconoven:camera-strap",
	});
}

export default Component;
