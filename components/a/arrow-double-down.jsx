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
		"content": `<style>.r3rwv4g3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.75V19.5m-4.25-9.25L12 14.5l4.25-4.25m-8.5 5.5L12 20l4.25-4.25");
}
</style><path class="r3rwv4g3a"/>`,
		"fallback": "iconoven:arrow-double-down",
	});
}

export default Component;
