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
		"content": `<style>.linpexbya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.25v-.5a2 2 0 0 1 2-2C8 15.75 10.5 14 12.5 11l2.25-3.5a1.75 1.75 0 0 1 3 .05l3.5 5.7v2.25c-4.25 0-7.75 1.5-9.75 3.75H3.75a1 1 0 0 1-1-1m17.25-2v5");
}
</style><path class="linpexbya"/>`,
		"fallback": "iconoven:high-heel",
	});
}

export default Component;
