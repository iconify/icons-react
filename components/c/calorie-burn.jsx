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
		"content": `<style>.om6veubje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 21.25a5.5 5.5 0 0 1-5.5-5.5c0-3.25 2.5-5 3.25-8.75c1.75 1.25 2.75 2.75 2.75 4.5c.85-.6 1.45-1.65 1.6-2.85c2.15 1.6 3.4 4 3.4 7.1a5.5 5.5 0 0 1-5.5 5.5M19 3.75v8.5M16.75 10L19 12.25L21.25 10");
}
</style><path class="om6veubje"/>`,
		"fallback": "iconoven:calorie-burn",
	});
}

export default Component;
