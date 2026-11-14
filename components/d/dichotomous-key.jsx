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
		"content": `<style>.dntcz5p8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 3.561l2.378 2.378a1.5 1.5 0 0 1 0 2.122l-2.378 2.378a1.5 1.5 0 0 1-2.122 0L8.561 8.061a1.5 1.5 0 0 1 0-2.122l2.378-2.378a1.5 1.5 0 0 1 2.122 0M12 11.5v3M5 18v-3.5h14V18M5 21h.01M19 21h.01");
}
</style><path class="dntcz5p8v"/>`,
		"fallback": "uix:dichotomous-key",
	});
}

export default Component;
