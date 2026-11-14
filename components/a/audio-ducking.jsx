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
		"content": `<style>.cd3tmhvpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7v10M7 10.5v3m3.5-3v3M14 7v10m5.5-14.5v11m0 4v4m-2-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="cd3tmhvpc"/>`,
		"fallback": "uix:audio-ducking",
	});
}

export default Component;
