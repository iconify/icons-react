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
		"content": `<style>.clychlg-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 17v-6.5a6.5 6.5 0 0 1 13 0V17l1.5 1.75H4zm4.5 4.5h4M9 15v-2.5m3 2.5V9m3 6v-4");
}
</style><path class="clychlg-w"/>`,
		"fallback": "uix-sharp:data-alert",
	});
}

export default Component;
