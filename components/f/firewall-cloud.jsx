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
		"content": `<style>.x-l7j4g7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18.5a4.5 4.5 0 0 1 0-9a6 6 0 0 1 11 0a4.5 4.5 0 0 1 0 9ZM5 14h14m-7-4.5V14m-3.5 0v4.5m7-4.5v4.5");
}
</style><path class="x-l7j4g7c"/>`,
		"fallback": "uix-sharp:firewall-cloud",
	});
}

export default Component;
