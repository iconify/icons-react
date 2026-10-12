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
		"content": `<style>.zv_u0bckp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 1 1 0-12.5m0 3.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5m-8.25 12h16.5M7 18.5v2.75m10-2.75v2.75");
}
</style><path class="zv_u0bckp"/>`,
		"fallback": "iconoven:ct-scanner",
	});
}

export default Component;
