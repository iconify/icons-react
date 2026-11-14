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
		"content": `<style>.bio8pruda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11.25a3.75 3.75 0 1 1 4.5 0c2.5 1 3.75 3.5 3.75 6.75v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-2c0-3.25 1.25-5.75 3.75-6.75m10.732 3.207l.173-.781a1.5 1.5 0 0 1 .404-.735L19.5 11a1.06 1.06 0 0 1 1.5 0a1.06 1.06 0 0 1 0 1.5l-2.02 2.02a1.5 1.5 0 0 1-.534.344l-.696.261a.579.579 0 0 1-.768-.668");
}
</style><path class="bio8pruda"/>`,
		"fallback": "uix:avatar-edit",
	});
}

export default Component;
