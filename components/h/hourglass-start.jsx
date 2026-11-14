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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vixx5acnu {
  d: path("M9.5 6.5h5C14 8 13.25 9 12 9.75C10.75 9 10 8 9.5 6.5");
}
</style><g class="hntgybcog"><path class="c0hayn6xe"/><path class="vixx5acnu"/></g>`,
		"fallback": "uix:hourglass-start",
	});
}

export default Component;
