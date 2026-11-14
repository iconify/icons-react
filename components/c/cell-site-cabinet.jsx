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
		"content": `<style>.ip8hl-bch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7h8.5A1.75 1.75 0 0 1 18 8.75v11a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 19.75v-11A1.75 1.75 0 0 1 7.75 7M15 7V4.25M12 7v14.5m-3-9v3m5-12.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="ip8hl-bch"/>`,
		"fallback": "uix:cell-site-cabinet",
	});
}

export default Component;
