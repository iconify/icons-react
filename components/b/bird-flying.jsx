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
		"content": `<style>.iikh38b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m21.5 13.5l-2-1.25C18.9 11.4 18 11 17 11c-1.25 0-2.25.75-3 1.75c-1.5-3.25-4.5-6-8.5-7C6.5 9 7.75 11.5 9.75 13.5C7.5 14 5 14.25 2.5 14L4 16.5c2.5 1.25 5 1.75 7.5 1.75c4 0 6.75-1.75 8-3.75Z");
}
</style><path class="iikh38b4a"/>`,
		"fallback": "uix:bird-flying",
	});
}

export default Component;
