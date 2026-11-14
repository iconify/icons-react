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
		"content": `<style>.cf-5fnk1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 8v2.5M15 8v2.5M7.5 14h.01M10 15.5h.01m3.99 0h.01M16.5 14h.01");
}
</style><path class="cf-5fnk1z"/>`,
		"fallback": "uix-sharp:face-freckles",
	});
}

export default Component;
