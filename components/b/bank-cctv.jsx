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
		"content": `<style>.utf4hpbev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L17.5 4l2 5.5L5 13Zm9 3.5l2.5 5m-5 1h8");
}
</style><path class="utf4hpbev"/>`,
		"fallback": "uix-sharp:bank-cctv",
	});
}

export default Component;
