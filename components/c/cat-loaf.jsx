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
		"content": `<style>.r9kn_zbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.5V15A5.5 5.5 0 0 1 9 9.5h3.5V5l3 2.5h2l3-2.5v14.5Zm14-8h.01m-4.01 5h4");
}
</style><path class="r9kn_zbon"/>`,
		"fallback": "uix:cat-loaf",
	});
}

export default Component;
