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
		"content": `<style>.oubo0rbzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5L12 4l9 6.5Zm9 0V21m0-17l-3 6.5M12 4l3 6.5");
}
</style><path class="oubo0rbzd"/>`,
		"fallback": "uix:cocktail-umbrella",
	});
}

export default Component;
