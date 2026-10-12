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
		"content": `<style>.rev_g9bya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.25L3.25 12L8 16.75m8-9.5L20.75 12L16 16.75m-2.25-12l-3.5 14.5");
}
</style><path class="rev_g9bya"/>`,
		"fallback": "iconoven:code-split",
	});
}

export default Component;
