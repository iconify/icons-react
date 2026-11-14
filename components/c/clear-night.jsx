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
		"content": `<style>.ec-za_bdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.5a8 8 0 1 0 7.5 10a6.5 6.5 0 0 1-7.5-10m6.5-2v4m-2-2h4m-1 5v3M18 11h3");
}
</style><path class="ec-za_bdq"/>`,
		"fallback": "uix:clear-night",
	});
}

export default Component;
