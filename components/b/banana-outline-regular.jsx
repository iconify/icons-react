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
		"content": `<style>.rw4ybb8iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7c0 9 6 14 16 12 -7 -2 -11 -6 -11 -13Z");
}
</style><path class="rw4ybb8iv"/>`,
		"fallback": "iconmind:banana-outline-regular",
	});
}

export default Component;
