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
		"content": `<style>.h4vm0cb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19M3 4.5h18m-14.5 0V20q2.75 1.75 5.5 0q2.75 1.75 5.5 0V4.5m-5.5 0v12.75");
}
</style><path class="h4vm0cb4x"/>`,
		"fallback": "uix-sharp:cabin-curtain",
	});
}

export default Component;
