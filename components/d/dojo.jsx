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
		"content": `<style>.mm2-jnsty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5C6 9.5 8 7 9 4h6c1 3 3 5.5 6.5 5.5Zm3.5 0V18m12-8.5V18M5 18h14a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 21H5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 5 18");
}
</style><path class="mm2-jnsty"/>`,
		"fallback": "uix:dojo",
	});
}

export default Component;
