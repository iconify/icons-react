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
		"content": `<style>.gre6w_p9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a3.25 3.25 0 1 0 6.5 0A3.25 3.25 0 1 0 3 7m11.5 0A3.25 3.25 0 1 0 21 7a3.25 3.25 0 1 0-6.5 0m-12 8.5C2.5 14 4 13 6.25 13S10 14 10 15.5m4 0c0-1.5 1.5-2.5 3.75-2.5s3.75 1 3.75 2.5m-19 0h19m-9.5 0v5m-3 0h6");
}
</style><path class="gre6w_p9e"/>`,
		"fallback": "uix:accountant-meeting",
	});
}

export default Component;
