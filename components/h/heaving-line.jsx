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
		"content": `<style>.u53k79b2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 9.5a3 3 0 0 0-6 0a4.5 4.5 0 0 0 9 0A6.25 6.25 0 0 0 3 9.5c0 6 5 9 12.5 9m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="u53k79b2r"/>`,
		"fallback": "uix-sharp:heaving-line",
	});
}

export default Component;
