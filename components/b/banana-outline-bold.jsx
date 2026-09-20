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
		"content": `<style>.e0amjdn1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M4 7c0 9 6 14 16 12 -7 -2 -11 -6 -11 -13Z");
}
</style><path class="e0amjdn1i"/>`,
		"fallback": "iconmind:banana-outline-bold",
	});
}

export default Component;
