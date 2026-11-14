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
		"content": `<style>.fuezujb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 3a9.5 9.5 0 1 0 0 18a9.5 9.5 0 0 1 0-18Z");
}
</style><path class="fuezujb1e"/>`,
		"fallback": "uix-sharp:crescent",
	});
}

export default Component;
