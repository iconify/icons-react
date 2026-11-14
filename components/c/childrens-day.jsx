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
		"content": `<style>.vsee-l1ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.667 4.521L19.929 8.4a1.5 1.5 0 0 1-.762 1.809l-4.9 2.423a1.5 1.5 0 0 1-2.162-1.248l-.352-5.456a1.5 1.5 0 0 1 1.186-1.563l3.99-.848a1.5 1.5 0 0 1 1.738 1.004M12.25 13.75C11.5 17 8.5 15.5 7.5 18c-.5 1.75-2 3-4 3.5M18.25 3.237l-6 10.392M9.5 14.75l1 2.75M5.25 19l1.5 2.5");
}
</style><path class="vsee-l1ad"/>`,
		"fallback": "uix:childrens-day",
	});
}

export default Component;
