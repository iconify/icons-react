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
		"content": `<style>.r6lu4hbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3h6.5a5.25 5.25 0 0 1 5.25 5.25v7.5A5.25 5.25 0 0 1 15.25 21h-6.5a5.25 5.25 0 0 1-5.25-5.25v-7.5A5.25 5.25 0 0 1 8.75 3M3.5 7h17M12 10v9m-3.75-6.75l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="r6lu4hbho"/>`,
		"fallback": "uix:cold-pack",
	});
}

export default Component;
