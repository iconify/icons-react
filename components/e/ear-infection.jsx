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

.qy6tfzh5v {
  fill: currentColor;
  d: path("M12 7.25v1.5l1.75.25l-1.25 1l.5 1.5l-1.5-.75l-1 1.25v-1.5l-1.75-.25l1.25-1l-.5-1.5l1.5.75Z");
}

.wty6em6ov {
  d: path("M6.25 9c0-3.5 2.5-6 6-6c3.25 0 5.5 2.5 5.5 5.75c0 2.75-1.5 4-2.75 5.25s-1.25 2.5-1.75 4.5c-.5 1.75-2 2.5-3.5 2.5c-2 0-3.5-1.5-3.5-3.5");
}
</style><g class="hntgybcog"><path class="wty6em6ov"/><path class="qy6tfzh5v"/></g>`,
		"fallback": "uix:ear-infection",
	});
}

export default Component;
