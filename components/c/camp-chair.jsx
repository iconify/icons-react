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
		"content": `<style>.znfs3ccjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 11l14 9.5m0-9.5L5 20.5M5 11q7 3 14 0M5 11V3.5M19 11V3.5m-14 1q7 3 14 0");
}
</style><path class="znfs3ccjw"/>`,
		"fallback": "uix:camp-chair",
	});
}

export default Component;
