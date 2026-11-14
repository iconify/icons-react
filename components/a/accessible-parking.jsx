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
		"content": `<style>.etw475bob {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M11 7h.01");
}

.f1bbb0bma {
  d: path("M10.5 11.25a3.5 3.5 0 1 1-3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu1r-pdvb {
  d: path("M11 9.75v4.5h3.75l1.75 3.5");
}
</style><g class="hntgybcog"><path class="etw475bob"/><path class="yu1r-pdvb"/><path class="f1bbb0bma"/></g>`,
		"fallback": "uix:accessible-parking",
	});
}

export default Component;
