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
		"content": `<style>.c0hayn6xe {
  d: path("M7 3h10v2.5c0 2.5-2.5 5-5 6.5c2.5 1.5 5 4 5 6.5V21H7v-2.5c0-2.5 2.5-5 5-6.5c-2.5-1.5-5-4-5-6.5ZM5 3h14M5 21h14");
}

.ewdop-39q {
  d: path("M10 7h4c-.5 1.25-1.25 2-2 2.5c-.75-.5-1.5-1.25-2-2.5m0 11h4c-.25-1-1-1.75-2-2c-1 .25-1.75 1-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c0hayn6xe"/><path class="ewdop-39q"/></g>`,
		"fallback": "uix:hourglass-half",
	});
}

export default Component;
