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
		"content": `<style>.fezbecmev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10a6 6 0 1 0 12 0a6 6 0 1 0-12 0m0 0h12m-9.5 7L7 21m8.5-4l1.5 4m-5-5v5");
}
</style><path class="fezbecmev"/>`,
		"fallback": "uix:bbq-area",
	});
}

export default Component;
