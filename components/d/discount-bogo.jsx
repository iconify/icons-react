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
		"content": `<style>.y-nhnn4vd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 7.25V3H7L3.5 7.5l1.75 2.25M12.2 19h-1.7L7 14.5l3.5-4.5h11v5.2M7 7.5h.01m3.74 7h.01M18 15v6m-3-3h6");
}
</style><path class="y-nhnn4vd"/>`,
		"fallback": "uix-sharp:discount-bogo",
	});
}

export default Component;
