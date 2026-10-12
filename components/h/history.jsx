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
		"content": `<style>.drbi0rnnl {
  d: path("M3.75 12a8.25 8.25 0 1 0 2.42-5.83L3.75 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk-a6006u {
  d: path("M3.75 3.75v4.5h4.5m3.75-.5V12l3 1.75");
}
</style><g class="hntgybcog"><path class="drbi0rnnl"/><path class="yk-a6006u"/></g>`,
		"fallback": "iconoven:history",
	});
}

export default Component;
