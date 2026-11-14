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
		"content": `<style>.jja_jwb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5a5 3.5 0 0 1 10 0V16a5 3.5 0 0 1-10 0Zm1.5 12v3m7-3v3");
}
</style><path class="jja_jwb0e"/>`,
		"fallback": "uix:coker-drum",
	});
}

export default Component;
