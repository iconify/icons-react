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

.mtvi81ccy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5");
}

.y2yfjxb6r {
  d: path("M12 6.5s-4 4.25-4 6.75a4 4 0 0 0 8 0c0-2.5-4-6.75-4-6.75");
}
</style><g class="hntgybcog"><path class="mtvi81ccy"/><path class="y2yfjxb6r"/></g>`,
		"fallback": "uix:humidity-sensor",
	});
}

export default Component;
