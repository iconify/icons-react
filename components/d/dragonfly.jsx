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
		"content": `<style>.k1gqz0bwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 6.75V21.5m-9.5-12a4.75 1.75 0 1 0 9.5 0a4.75 1.75 0 1 0-9.5 0m9.5 0a4.75 1.75 0 1 0 9.5 0a4.75 1.75 0 1 0-9.5 0m-9 6a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0m9 0a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0");
}
</style><path class="k1gqz0bwm"/>`,
		"fallback": "uix:dragonfly",
	});
}

export default Component;
