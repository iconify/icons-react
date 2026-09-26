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
		"content": `<style>.w570xnbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 3H13.5M21 10.5V13.5M3 7V6C3 4.34315 4.34315 3 6 3M18 3C19.6569 3 21 4.34315 21 6M17 21H18C19.6569 21 21 19.6569 21 18M4 15.5H14M9 10L3.40208 15.1314C3.1859 15.3296 3.1859 15.6704 3.40208 15.8686L9 21");
}
</style><path class="w570xnbgb"/>`,
		"fallback": "keyline-icons:arrow-left-dashed-panel-fill",
	});
}

export default Component;
