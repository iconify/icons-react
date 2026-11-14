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
		"content": `<style>.rpo1wkbxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M12.5 3v18m0-10H21M3 14h9.5m4.25-3v10");
}
</style><path class="rpo1wkbxa"/>`,
		"fallback": "uix:chart-treemap",
	});
}

export default Component;
