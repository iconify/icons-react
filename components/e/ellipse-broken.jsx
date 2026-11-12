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
		"content": `<style>.ly88a1ihf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.5825C9.2249 5.2078 10.5778 5 12 5C17.5228 5 22 8.134 22 12C22 15.866 17.5228 19 12 19C6.4772 19 2 15.866 2 12C2 10.9264 2.3453 9.9093 2.9623 9");
}
</style><path class="ly88a1ihf"/>`,
		"fallback": "solar:ellipse-broken",
	});
}

export default Component;
