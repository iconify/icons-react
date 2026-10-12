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
		"content": `<style>.r5uimcyem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.66 8.96l8.93 3.58q1.16.46-.03.84l-3.12.99q-1.19.38-1.59 1.57l-.95 2.87q-.4 1.19-.81.01L8.91 9.68q-.41-1.18.75-.72m-4.7 3.08a5 5 0 0 1 7.08-7.08");
}
</style><path class="r5uimcyem"/>`,
		"fallback": "iconoven:cursor-click",
	});
}

export default Component;
