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
		"content": `<style>.ad3odfp3p {
  d: path("M12 6.5C14.5 9 16.5 11 16.5 14a4.5 4.5 0 0 1-9 0c0-2 1-3.5 2.25-4.5c.25 1.5 1 2.5 2 2.75c-.5-2.25-.5-4.25.25-5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jsztq_emy {
  d: path("M9.5 2.5h5a7 7 0 0 1 7 7v5a7 7 0 0 1-7 7h-5a7 7 0 0 1-7-7v-5a7 7 0 0 1 7-7");
}
</style><g class="hntgybcog"><path class="jsztq_emy"/><path class="ad3odfp3p"/></g>`,
		"fallback": "uix:fire-class-abc",
	});
}

export default Component;
