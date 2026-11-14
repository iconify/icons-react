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
		"content": `<style>.d7c075b2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4zA1.75 1.75 0 0 1 6.5 5.75v12.5A1.75 1.75 0 0 1 4.75 20A1.75 1.75 0 0 1 3 18.25V5.75A1.75 1.75 0 0 1 4.75 4m14.5 0zA1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20a1.75 1.75 0 0 1-1.75-1.75V5.75A1.75 1.75 0 0 1 19.25 4M6.5 12l3-4l2 7l3-6l3 3");
}
</style><path class="d7c075b2t"/>`,
		"fallback": "uix:arc-flash",
	});
}

export default Component;
