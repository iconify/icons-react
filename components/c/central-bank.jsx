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
		"content": `<style>.lpppw_bna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8a5 5 0 0 1 10 0Zm-3.75 3h17.5m-15 3v4m4-4v4m4.5-4v4m4-4v4m-15 2.75h17.5");
}
</style><path class="lpppw_bna"/>`,
		"fallback": "iconoven:central-bank",
	});
}

export default Component;
