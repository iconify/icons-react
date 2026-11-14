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
		"content": `<style>.pwb4mp0yq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 12.5h13.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-1.75A2.625 2.625 0 0 1 5.125 12.5m3.375 0L6 5h12l-2.5 7.5M12 9h.01");
}
</style><path class="pwb4mp0yq"/>`,
		"fallback": "uix:camera-hot-shoe",
	});
}

export default Component;
