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
		"content": `<style>.cbdwf_bsy {
  d: path("M4 15v3a2 2 0 0 0 2 2h6.25M12 3.5V15m-4.5-4.5L12 15l4.5-4.5M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lu0dhdb5q {
  d: path("M18 16.5V18l1 1");
}
</style><g class="hntgybcog"><path class="cbdwf_bsy"/><path class="lu0dhdb5q"/></g>`,
		"fallback": "uix:download-pending",
	});
}

export default Component;
