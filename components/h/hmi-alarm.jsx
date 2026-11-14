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

.j_avoeb8n {
  d: path("m13.274 8.053l1.804 2.906a1.5 1.5 0 0 1-1.274 2.291h-3.608a1.5 1.5 0 0 1-1.274-2.291l1.804-2.906a1.5 1.5 0 0 1 2.548 0M12 9.25v1.25");
}

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="j_avoeb8n"/></g>`,
		"fallback": "uix:hmi-alarm",
	});
}

export default Component;
