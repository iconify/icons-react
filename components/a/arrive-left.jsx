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

.oxd3n8bcp {
  d: path("M12 21.5c-3-3-6.5-7-6.5-12a6.5 6.5 0 0 1 13 0c0 5-3.5 9-6.5 12m-3-12h6");
}

.ykapxmb2h {
  d: path("M11.5 7L9 9.5l2.5 2.5");
}
</style><g class="hntgybcog"><path class="oxd3n8bcp"/><path class="ykapxmb2h"/></g>`,
		"fallback": "uix:arrive-left",
	});
}

export default Component;
