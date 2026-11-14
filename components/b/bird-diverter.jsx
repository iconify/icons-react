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
		"content": `<style>.s19cehs4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5q9.5 3 19 0M12 6v2.5m-5 5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m0 0h10");
}
</style><path class="s19cehs4w"/>`,
		"fallback": "uix:bird-diverter",
	});
}

export default Component;
