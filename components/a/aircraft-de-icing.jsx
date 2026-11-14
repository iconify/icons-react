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
		"content": `<style>.qt_4xjgar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5v17M3.75 6.75l11.646 6.827M3.75 15.25l14.5-8.5M8.75 3L11 5l2.25-2m3.5 2l-.5 3L19 9m-7.021 8.871L11 17l-2.25 2M3 13l2.75 1l-.5 3m0-12l.5 3L3 9m15 5.5v7M14.5 19l3.5-2.25L21.5 19");
}
</style><path class="qt_4xjgar"/>`,
		"fallback": "uix:aircraft-de-icing",
	});
}

export default Component;
