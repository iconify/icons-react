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
		"content": `<style>.tguyzwb6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5H19v13H2.5Zm19 4.5v4M10.75 8.5v4m0 3h.01");
}
</style><path class="tguyzwb6t"/>`,
		"fallback": "uix-sharp:battery-warning",
	});
}

export default Component;
