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
		"content": `<style>.o7pdhxbsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 18l6.5-15M6 18l15-6.5M10 8.75A10 10 0 0 1 15.25 14M3.5 20.5h.01");
}
</style><path class="o7pdhxbsc"/>`,
		"fallback": "uix-sharp:beamforming",
	});
}

export default Component;
