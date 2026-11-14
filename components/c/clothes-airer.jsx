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
		"content": `<style>.imevbjbki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18.5M20 3v18.5M4 5h16M4 19h16M8.5 5l-2 3.5l2 1.5v5.5h7V10l2-1.5l-2-3.5");
}
</style><path class="imevbjbki"/>`,
		"fallback": "uix:clothes-airer",
	});
}

export default Component;
