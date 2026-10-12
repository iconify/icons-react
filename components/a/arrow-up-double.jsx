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
		"content": `<style>.uwkw9smtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.25V4.5m-4.25 9.25L12 9.5l4.25 4.25m-8.5-5.5L12 4l4.25 4.25");
}
</style><path class="uwkw9smtb"/>`,
		"fallback": "iconoven:arrow-up-double",
	});
}

export default Component;
