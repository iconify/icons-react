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
		"content": `<style>.hfbw5g7zv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 10L8 10.5h4l2.259 4.067M12.7 19H2.5v-4h11.4m1.6 6.5v-3a3 3 0 0 1 6 0v3m-6-2H17v2h-1.5m6-2H20v2h1.5");
}
</style><path class="hfbw5g7zv"/>`,
		"fallback": "uix-sharp:guided-meditation",
	});
}

export default Component;
