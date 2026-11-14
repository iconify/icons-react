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
		"content": `<style>.s5uu3fb8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v7l-5 4v2h-3v-2l-5-4Zm0 3h13M8 18.5h8c0 1.75-1.5 3-4 3s-4-1.25-4-3m8 0h4.5");
}
</style><path class="s5uu3fb8g"/>`,
		"fallback": "uix:bulk-dispenser",
	});
}

export default Component;
