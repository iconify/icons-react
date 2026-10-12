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
		"content": `<style>.tml6_9blm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75v5h-5m11.5 11.5v-5h5m0-6.5h-5v-5m-11.5 11.5h5v5");
}
</style><path class="tml6_9blm"/>`,
		"fallback": "iconoven:exit-fullscreen-sharp",
	});
}

export default Component;
