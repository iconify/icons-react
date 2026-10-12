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
		"content": `<style>.uickk25tw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.25V4.75a1 1 0 0 1 1-1h2.5M19 20.25V4.75a1 1 0 0 0-1-1h-2.5M12 17.5V8m-2.75 2.75L12 8l2.75 2.75");
}
</style><path class="uickk25tw"/>`,
		"fallback": "iconoven:ceiling-sign",
	});
}

export default Component;
