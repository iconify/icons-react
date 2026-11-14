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
		"content": `<style>.qs6kzabim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 21c0-3.5 2.75-5.5 6-5.5s6 2 6 5.5M2 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2 16c0-2.5 1-4.5 3-4.5M22 16c0-2.5-1-4.5-3-4.5");
}
</style><path class="qs6kzabim"/>`,
		"fallback": "uix-sharp:buying-committee",
	});
}

export default Component;
