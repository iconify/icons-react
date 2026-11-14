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
		"content": `<style>.uavispb3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 9.5l2-3h3l2 3V20a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 9.5 20Zm3.5-3v-2L16 3M4.5 12.75l-.777.486a1.5 1.5 0 0 0-.508 2.016L4.5 17.5a1.071 1.071 0 0 0 2-.531v-3.111a1.307 1.307 0 0 0-2-1.108m2 2.25h3m0-5.5h7M18.75 6c2.75-1-.25-3 2.5-4");
}
</style><path class="uavispb3h"/>`,
		"fallback": "uix:bee-smoker",
	});
}

export default Component;
