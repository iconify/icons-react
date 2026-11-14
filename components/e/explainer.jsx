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
		"content": `<style>.h632zwbvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5V12a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 12V6.5A3.5 3.5 0 0 1 6.5 3M12 15.5V18m-4 3.5l4-3.5l4 3.5m-9-14h8M7 11h4.5");
}
</style><path class="h632zwbvb"/>`,
		"fallback": "uix:explainer",
	});
}

export default Component;
