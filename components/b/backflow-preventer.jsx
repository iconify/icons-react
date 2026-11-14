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
		"content": `<style>.yqxiidbsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.75a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm1-3H2.5m0 6H8m8-6h5.5m0 6H16M12 6.5V11m-6 7.25h12.25m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="yqxiidbsm"/>`,
		"fallback": "uix-sharp:backflow-preventer",
	});
}

export default Component;
