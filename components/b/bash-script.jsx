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
		"content": `<style>.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.owrp88rnz {
  d: path("M10.5 9.5C10.25 8.25 9.25 7.75 8 7.75c-1.5 0-2.5.75-2.5 2c0 2.5 5 1.75 5 4.5c0 1.25-1 2-2.5 2c-1.25 0-2.25-.5-2.5-1.5M8 6.25v11.5m5.5-1.25H18");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="owrp88rnz"/></g>`,
		"fallback": "uix:bash-script",
	});
}

export default Component;
