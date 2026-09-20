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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sjfat19el {
  d: path("M9 10h3l3 3 -3 3H9Z");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="sjfat19el"/></g>`,
		"fallback": "iconmind:debug-symbol-outline-thin",
	});
}

export default Component;
