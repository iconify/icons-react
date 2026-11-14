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
		"content": `<style>.lqe_rabgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14.5h16V20H4Zm5.172-5.328a4 4 0 0 1 5.656 0M6.343 6.343a8 8 0 0 1 11.314 0M7.5 17.25h.01");
}
</style><path class="lqe_rabgx"/>`,
		"fallback": "uix-sharp:access-point",
	});
}

export default Component;
