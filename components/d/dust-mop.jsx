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
		"content": `<style>.maft0vyma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 2.5L12 15m-8.5 0h17v4h-17ZM7 19v2.5m5-2.5v2.5m5-2.5v2.5");
}
</style><path class="maft0vyma"/>`,
		"fallback": "uix-sharp:dust-mop",
	});
}

export default Component;
