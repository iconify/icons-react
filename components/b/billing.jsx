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

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}

.skw4bhy1z {
  d: path("M14.5 8c-.3-1.1-1.25-1.75-2.5-1.75c-1.5 0-2.5.85-2.5 2c0 2.5 5 1.25 5 3.5c0 1-1.1 1.5-2.5 1.5c-1.25 0-2.25-.5-2.5-1.25M12 5.25v1m0 7v1m-4 3h8");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="skw4bhy1z"/></g>`,
		"fallback": "uix:billing",
	});
}

export default Component;
