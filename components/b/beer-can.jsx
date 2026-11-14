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
		"content": `<style>.iddc4h82j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.625 3h4.75A2.625 2.625 0 0 1 17 5.625v12.75A2.625 2.625 0 0 1 14.375 21h-4.75A2.625 2.625 0 0 1 7 18.375V5.625A2.625 2.625 0 0 1 9.625 3M7 6h10M7 18h10m-5-8.5v5m0-2.5l-1.75-1.75M12 12l1.75-1.75");
}
</style><path class="iddc4h82j"/>`,
		"fallback": "uix:beer-can",
	});
}

export default Component;
