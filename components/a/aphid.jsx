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
		"content": `<style>.v07aavbxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c3 0 5 4 5 8s-2 6.5-5 6.5S7 18 7 14s2-8 5-8m-1.5.5L8 3m5.5 3.5L16 3m-8.75 8L4 9.5m3 5H3.5m4 3.5l-3 2m12.25-9L20 9.5m-3 5h3.5m-4 3.5l3 2");
}
</style><path class="v07aavbxg"/>`,
		"fallback": "uix:aphid",
	});
}

export default Component;
