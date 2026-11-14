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
		"content": `<style>.o-_l1xbar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 3.5h5.5A1.75 1.75 0 0 1 21 5.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 12 10.75v-5.5a1.75 1.75 0 0 1 1.75-1.75m.25 9l-1.5 9m6.5-9l1.5 9M3.75 6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-1.25 15V16a3.5 3.5 0 0 1 7 0v5.5m-.25-6.75L12 10.5");
}
</style><path class="o-_l1xbar"/>`,
		"fallback": "uix:artist-at-easel",
	});
}

export default Component;
