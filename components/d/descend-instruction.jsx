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
		"content": `<style>.v0muk9qti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5zA2.5 2.5 0 0 1 9 5v14a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 4 19V5a2.5 2.5 0 0 1 2.5-2.5M4 7h2.25M4 12h2.25M4 17h2.25M16 3.5v17m-3.75-3.75L16 20.5l3.75-3.75");
}
</style><path class="v0muk9qti"/>`,
		"fallback": "uix:descend-instruction",
	});
}

export default Component;
