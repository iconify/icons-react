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
		"content": `<style>.w2hepx_kh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 6h13.75A2.625 2.625 0 0 1 21.5 8.625v6.75A2.625 2.625 0 0 1 18.875 18H5.125A2.625 2.625 0 0 1 2.5 15.375v-6.75A2.625 2.625 0 0 1 5.125 6M7.25 9v6M12 9v6m4.75-6v6");
}
</style><path class="w2hepx_kh"/>`,
		"fallback": "uix:container-docker",
	});
}

export default Component;
