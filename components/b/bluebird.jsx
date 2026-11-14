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

.uugp5fyry {
  d: path("M12 13.25C11.5 9 13 6.5 16.5 5c0 2.5-.5 4.5-1.5 6.25M16.75 14h.01");
}

.zu1dnfbxe {
  d: path("m21 13.5l-2.75-1.25c-1.5-1.5-4.75-1.25-6.25 1L4.5 12l2 3.5L5 18l5-1c2.5 2.25 6.5 1.75 8-2.25Z");
}
</style><g class="hntgybcog"><path class="zu1dnfbxe"/><path class="uugp5fyry"/></g>`,
		"fallback": "uix:bluebird",
	});
}

export default Component;
