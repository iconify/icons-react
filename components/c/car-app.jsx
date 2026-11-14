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
		"content": `<style>.b_1223eii {
  d: path("M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m0 0h7.5M12 12v3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rfenysb5q {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5");
}
</style><g class="hntgybcog"><path class="rfenysb5q"/><path class="b_1223eii"/></g>`,
		"fallback": "uix:car-app",
	});
}

export default Component;
