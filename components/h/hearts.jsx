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
		"content": `<style>.xte6cmbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21C5.2626 18.662 2 16.65 2 13.65C2 11.7446 3.6117 10.2 5.6 10.2C6.5 10.2 7.3056 10.5275 8 11.1C8.6944 10.5275 9.5 10.2 10.4 10.2C12.3883 10.2 14 11.7446 14 13.65C14 16.65 10.7374 18.662 8 21ZM10.0086 6.21C10.1372 4.4166 11.6959 3 13.6 3C14.5 3 15.3056 3.3275 16 3.9C16.6944 3.3275 17.5 3 18.4 3C20.3883 3 22 4.5446 22 6.45C22 8.7806 20.031 10.5149 17.8689 12.2689");
}
</style><path class="xte6cmbfe"/>`,
		"fallback": "keyline-icons:hearts",
	});
}

export default Component;
