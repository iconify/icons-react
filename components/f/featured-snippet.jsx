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
		"content": `<style>.bzk55-buh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5V8a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 8V6.5A3.5 3.5 0 0 1 6.5 3M6 6h10M6 8.75h7M3 15h16M3 18h12M3 21h14");
}
</style><path class="bzk55-buh"/>`,
		"fallback": "uix:featured-snippet",
	});
}

export default Component;
