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
		"content": `<style>.tkaf2yqfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5C3.5 9 4 15.5 8.5 18h7c4.5-2.5 5-9 2-14.5m-13 3h15M9.5 21h5m-4-14.5V18m3-11.5V18");
}
</style><path class="tkaf2yqfx"/>`,
		"fallback": "uix:genre-classical",
	});
}

export default Component;
