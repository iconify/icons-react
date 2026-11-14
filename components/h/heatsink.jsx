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
		"content": `<style>.oiaztm33m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 15h10.75A2.625 2.625 0 0 1 20 17.625v.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 17.875v-.25A2.625 2.625 0 0 1 6.625 15M6.5 4v11M10 4v11m4-11v11m3.5-11v11");
}
</style><path class="oiaztm33m"/>`,
		"fallback": "uix:heatsink",
	});
}

export default Component;
