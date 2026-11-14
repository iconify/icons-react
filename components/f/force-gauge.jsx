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

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.zslxmxb0h {
  d: path("M12 16.5v2.25a2.25 2.25 0 0 1-4.5 0M12 9.5l2.75-2.75M12 9.5h.01");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="zslxmxb0h"/></g>`,
		"fallback": "uix:force-gauge",
	});
}

export default Component;
