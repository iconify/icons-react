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
		"content": `<style>.mklebkbsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c2 2 6 3.5 6 6.5c0 2.5-2.5 4-6 4s-6-1.5-6-4c0-3 4-4.5 6-6.5M2.5 8h19M12 11V2.5M12 5c.5-1.75 2.5-2.5 4.5-2.5C16 4.25 14 5 12 5");
}
</style><path class="mklebkbsd"/>`,
		"fallback": "uix:bulb-planting",
	});
}

export default Component;
