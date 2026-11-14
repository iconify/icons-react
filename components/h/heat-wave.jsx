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
		"content": `<style>.mfg2323jo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-4 0h1.75m10.5 0H19M12 2v1.25M7 3.5l1.25 1.25M17 3.5l-1.25 1.25M8 21q1-1.5 0-3t0-3m4 6q1-1.5 0-3t0-3m4 6q1-1.5 0-3t0-3");
}
</style><path class="mfg2323jo"/>`,
		"fallback": "uix-sharp:heat-wave",
	});
}

export default Component;
