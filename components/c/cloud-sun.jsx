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
		"content": `<style>.p40m3hman {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.96 20.89a3.36 3.36 0 0 1-.46-6.69a4.83 4.83 0 0 1 8.95-1.16a3.78 3.78 0 0 1-.51 7.85Zm-2.11-9.46a3.25 3.25 0 1 1 5.23-3.46M3.75 9h-1m2.54-3.71l-.71-.71M9 3.75v-1m3.71 2.54l.71-.71");
}
</style><path class="p40m3hman"/>`,
		"fallback": "iconoven:cloud-sun",
	});
}

export default Component;
