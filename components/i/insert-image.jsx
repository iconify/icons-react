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

.qx7i5x3qf {
  d: path("M17.75 2.75v6.5m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.xj8f5byfs {
  d: path("M12.75 3.75h-7a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-6.5M3.75 16.5L8 12.25l3.5 3.5l2-2l3.5 3.5");
}
</style><g class="hntgybcog"><path class="xj8f5byfs"/><path class="qx7i5x3qf"/></g>`,
		"fallback": "iconoven:insert-image",
	});
}

export default Component;
