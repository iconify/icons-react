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
		"content": `<style>.fz5ek8i3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.945 10.77l3.535 3.535l-7.425 7.425l-3.535-3.535ZM13 7l.75-3M16 10l3-.75M17.5 4.5h.01M20.5 13h.01M10 4h.01");
}
</style><path class="fz5ek8i3x"/>`,
		"fallback": "uix-sharp:confetti-cannon",
	});
}

export default Component;
