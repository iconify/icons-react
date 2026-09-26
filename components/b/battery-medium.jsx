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
		"content": `<style>.i7a5cccqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6H15C16.65685 6 18 7.34315 18 9V15C18 16.65685 16.65685 18 15 18H5C3.34315 18 2 16.65685 2 15V9C2 7.34315 3.34315 6 5 6ZM22 9.5V14.5M6 10V14M10 10V14");
}
</style><path class="i7a5cccqn"/>`,
		"fallback": "keyline-icons:battery-medium",
	});
}

export default Component;
