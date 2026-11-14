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
		"content": `<style>.xrcgzq3bs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5H19L17 19H6.5c-2 0-3.25-2-4-4.5m13.5 0v-4C16 8.25 17.25 7 19.25 7h2.25l-1 3h-1.75v4.5m-1.5-7.25l-1-2.5M2.5 14.5c0-2 .5-3.5 2-4");
}
</style><path class="xrcgzq3bs"/>`,
		"fallback": "uix:dragon-boat",
	});
}

export default Component;
