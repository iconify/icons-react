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
		"content": `<style>.egf6_bcfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h17m0 9h-17m14-12l3 3l-3 3m-11 3l-3 3l3 3");
}
</style><path class="egf6_bcfv"/>`,
		"fallback": "uix:arrows-left-right-alt",
	});
}

export default Component;
