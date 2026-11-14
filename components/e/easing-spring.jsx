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
		"content": `<style>.omwvnqbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c4 0 5-16 8.5-16c3 0 3 5.5 5.5 5.5c2 0 2.5-2.5 5-2.5m-19 13h.01M21.5 7h.01");
}
</style><path class="omwvnqbgw"/>`,
		"fallback": "uix:easing-spring",
	});
}

export default Component;
