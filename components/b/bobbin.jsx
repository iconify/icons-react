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
		"content": `<style>.c7hcv3b8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h10A1.5 1.5 0 0 1 17.5 4A1.5 1.5 0 0 1 16 5.5H6A1.5 1.5 0 0 1 4.5 4A1.5 1.5 0 0 1 6 2.5m0 16h10a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20A1.5 1.5 0 0 1 6 18.5m1.5-13v13m7-13v13m-7-6.5h7m-7 3h7m-7-6h7c4.5 0 3 5 6 6.5");
}
</style><path class="c7hcv3b8b"/>`,
		"fallback": "uix:bobbin",
	});
}

export default Component;
