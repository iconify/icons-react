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
		"content": `<style>.lt-mps59m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.208 21.39L12 21.5L3.5 17V7L12 2.5L20.5 7v5.382M3.5 7l8.5 4.5M20.5 7L12 11.5m0 0v10m3-6.5l6.5 6.5m0-6.5L15 21.5");
}
</style><path class="lt-mps59m"/>`,
		"fallback": "uix:build-failed",
	});
}

export default Component;
