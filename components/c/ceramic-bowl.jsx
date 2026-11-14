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
		"content": `<style>.od3_-dhfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h15c0 4.5-3 7-6 7h-3c-3 0-6-2.5-6-7Zm-2 7h19v3h-19Zm9.5 3v4.5m-4.5 0h9");
}
</style><path class="od3_-dhfo"/>`,
		"fallback": "uix-sharp:ceramic-bowl",
	});
}

export default Component;
