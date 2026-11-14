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
		"content": `<style>.hqs2h1qmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 19.5H2.5v-14H20v6.6M8.25 5.5v-2A1.5 1.5 0 0 1 9.75 2h3a1.5 1.5 0 0 1 1.5 1.5v2m1.25 10l5 5m0-5l-5 5");
}
</style><path class="hqs2h1qmj"/>`,
		"fallback": "uix-sharp:briefcase-x",
	});
}

export default Component;
