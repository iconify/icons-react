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
		"content": `<style>.vcxsmnstd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.121 5.282l4.597 4.597a1.75 1.75 0 0 1 0 2.475a1.75 1.75 0 0 1-2.475 0l-4.597-4.597a1.75 1.75 0 0 1 0-2.475a1.75 1.75 0 0 1 2.475 0m-.176 4.773L12.53 11.47m0 0za1.25 1.25 0 0 1 0 1.767l-5.657 5.657a1.25 1.25 0 0 1-1.767 0a1.25 1.25 0 0 1 0-1.767l5.657-5.657a1.25 1.25 0 0 1 1.767 0m.531-4.773l4.242 4.242");
}
</style><path class="vcxsmnstd"/>`,
		"fallback": "uix:disposable-razor",
	});
}

export default Component;
