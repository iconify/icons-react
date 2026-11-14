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
		"content": `<style>.vlvwc22mf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10v9m0 0v-5.5a3.5 3.5 0 0 1 7 0V19m6-14.5V14m0 4.5h.01");
}
</style><path class="vlvwc22mf"/>`,
		"fallback": "uix:factorial",
	});
}

export default Component;
