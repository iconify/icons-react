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
		"content": `<style>.xe4euxb8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v15.75M8 3h10v6.5H8M3 21q9-5.5 18 0");
}
</style><path class="xe4euxb8g"/>`,
		"fallback": "uix-sharp:astronaut-flag",
	});
}

export default Component;
