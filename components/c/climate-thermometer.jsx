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
		"content": `<style>.dbl9ro8wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0m2-7.5v11M15.5 6.5h2m-2 3.5h2");
}
</style><path class="dbl9ro8wo"/>`,
		"fallback": "uix:climate-thermometer",
	});
}

export default Component;
