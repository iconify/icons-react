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
		"content": `<style>.r2xmbgkki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.16 14.1a3.02 3.02 0 0 1-.41-6.02a4.35 4.35 0 0 1 8.05-1.04a3.4 3.4 0 0 1-.45 7.06Zm-5.71-1.71a4.75 4.75 0 0 1 2.59-8.37m-.5 2.5a3.75 3.75 0 0 1 .51-2.48m6.7 12.71l-2.25 2.5h3.25l-2 2");
}
</style><path class="r2xmbgkki"/>`,
		"fallback": "iconoven:cloud-moon-lightning",
	});
}

export default Component;
