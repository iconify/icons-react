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
		"content": `<style>.ndzc6mtki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9v2.75a5 5 0 1 0 3 0V9M8 6.25q-1-1 0-2T8 2.5m4 3.75q-1-1 0-2t0-1.75m4 3.75q-1-1 0-2t0-1.75");
}
</style><path class="ndzc6mtki"/>`,
		"fallback": "uix-sharp:exothermic",
	});
}

export default Component;
