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
		"content": `<style>.qyle4mboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.75v15.5a1 1 0 0 0 1 1h2.5M19 3.75v15.5a1 1 0 0 1-1 1h-2.5M12 6.5V16m-2.75-2.75L12 16l2.75-2.75");
}
</style><path class="qyle4mboq"/>`,
		"fallback": "iconoven:floor-sign",
	});
}

export default Component;
