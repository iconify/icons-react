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

.l55k844ye {
  d: path("M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6.5a2.5 2.5 0 0 1-2.5 2.5H11l-4 3v-3h-.5A2.5 2.5 0 0 1 4 15.5V9a2.5 2.5 0 0 1 2.5-2.5M12 2.75V6.5M9.5 12h.01m4.99 0h.01");
}

.tkpegez4g {
  d: path("M9.75 14.75c1.25 1 3.25 1 4.5 0");
}
</style><g class="hntgybcog"><path class="l55k844ye"/><path class="tkpegez4g"/></g>`,
		"fallback": "uix:chatbot-greeting",
	});
}

export default Component;
