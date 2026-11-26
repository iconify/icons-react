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
		"content": `<style>.m2pemyb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18.8L10.7143 12.2L14.5714 15.5L21 10V20C21 20.5523 20.5523 21 20 21H4C3.4477 21 3 20.5523 3 20V18.8ZM3 12L10.7143 5.25L14.5714 8.625L21 3");
}
</style><path class="m2pemyb2x"/>`,
		"fallback": "keyline-icons:chart-area-stacked",
	});
}

export default Component;
