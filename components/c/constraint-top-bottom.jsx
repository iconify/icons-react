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
		"content": `<style>.fmrajbdhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12M6 21h12M11.625 7.5h.75A2.625 2.625 0 0 1 15 10.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-.75A2.625 2.625 0 0 1 9 13.875v-3.75A2.625 2.625 0 0 1 11.625 7.5M12 3v4.5m0 9V21");
}
</style><path class="fmrajbdhs"/>`,
		"fallback": "uix:constraint-top-bottom",
	});
}

export default Component;
