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

.ko6pdmbxq {
  d: path("M12 5.5za7 7 0 0 1 7 7v2a7 7 0 0 1-7 7a7 7 0 0 1-7-7v-2a7 7 0 0 1 7-7m-2.5 0v-1a2.5 2.5 0 0 1 5 0v1");
}

.oxg6of9kb {
  d: path("M10.5 13.5h3A2.5 2.5 0 0 1 16 16a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 16a2.5 2.5 0 0 1 2.5-2.5");
}
</style><g class="hntgybcog"><path class="ko6pdmbxq"/><path class="oxg6of9kb"/></g>`,
		"fallback": "uix:backpack-school",
	});
}

export default Component;
