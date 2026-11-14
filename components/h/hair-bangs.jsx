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

.jiy4mehfh {
  d: path("M8 9.5v4a4 4 0 0 0 8 0v-4");
}

.trxeadcsa {
  d: path("M4.5 21V10a7.5 7.5 0 0 1 15 0v11M4.5 9.5h15");
}
</style><g class="hntgybcog"><path class="trxeadcsa"/><path class="jiy4mehfh"/></g>`,
		"fallback": "uix:hair-bangs",
	});
}

export default Component;
