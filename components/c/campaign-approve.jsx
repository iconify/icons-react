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

.qxn4prbzl {
  d: path("M8.5 4.25H7a2.5 2.5 0 0 0-2.5 2.5V19A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5V6.75a2.5 2.5 0 0 0-2.5-2.5h-1.5");
}

.s7nh2rbrf {
  d: path("M10.25 2.5h3.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 13.75 6h-3.5A1.75 1.75 0 0 1 8.5 4.25a1.75 1.75 0 0 1 1.75-1.75m-1.75 11L11 16l4.5-4.5");
}
</style><g class="hntgybcog"><path class="qxn4prbzl"/><path class="s7nh2rbrf"/></g>`,
		"fallback": "uix:campaign-approve",
	});
}

export default Component;
