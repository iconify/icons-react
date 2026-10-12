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
		"content": `<style>.kmg513bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.75h17.5M3.25 9h11M10 18.75H8a2.75 2.75 0 0 1 0-5.5h2m4 0h2a2.75 2.75 0 0 1 0 5.5h-2M9.5 16h5");
}
</style><path class="kmg513bjk"/>`,
		"fallback": "iconoven:bio-link",
	});
}

export default Component;
