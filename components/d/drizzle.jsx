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
		"content": `<style>.bzvlmbpde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15h11a3.5 3.5 0 0 0 0-7A5.5 5.5 0 0 0 7 9a3.25 3.25 0 0 0-.5 6m2 2.75l-1 3m5-3l-1 3m5-3l-1 3");
}
</style><path class="bzvlmbpde"/>`,
		"fallback": "uix:drizzle",
	});
}

export default Component;
