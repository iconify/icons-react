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
		"content": `<style>.wjf78x77t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20L6 11.25L9.25 20M3.9 17h4.2m2.65 3L16 4.75L21.25 20m-8.5-5.5h6.5");
}
</style><path class="wjf78x77t"/>`,
		"fallback": "iconoven:font-scale",
	});
}

export default Component;
