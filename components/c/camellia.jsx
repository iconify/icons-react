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
		"content": `<style>.f9i168bjb {
  d: path("M12 4.5a4.75 4.75 0 0 1 7.25 5.25A4.75 4.75 0 0 1 16.5 18a4.75 4.75 0 0 1-9 0a4.75 4.75 0 0 1-2.75-8.25A4.75 4.75 0 0 1 12 4.5m0 0v2.75m7.25 2.5l-2.75.75m0 7.5l-1.75-2.25M7.5 18l1.75-2.25m-4.5-6l2.75.75");
}

.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f9i168bjb"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:camellia",
	});
}

export default Component;
