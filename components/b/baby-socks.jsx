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
		"content": `<style>.pjjn7cbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h4.5a1 1 0 0 1 1 1V11l4 4a2.83 2.83 0 0 1-4 4l-5-5a3 3 0 0 1-1-2.25v-8a1 1 0 0 1 1-1ZM6.25 6h6.5");
}
</style><path class="pjjn7cbyt"/>`,
		"fallback": "iconoven:baby-socks",
	});
}

export default Component;
