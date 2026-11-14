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

.oombvifuw {
  d: path("M8 2.5h8m-6.5 0V8a7 7 0 1 0 5 0V2.5M6 11h12");
}

.swwndvdgz {
  d: path("M8.25 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-2a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="oombvifuw"/><path class="swwndvdgz"/></g>`,
		"fallback": "uix:flask-bubbling",
	});
}

export default Component;
