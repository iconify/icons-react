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
		"content": `<style>.z7y9_gy1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-18 0v17h5C8.5 17 6 15 6 13c0-3 4.5-6 4.5-9.5m10 0v17h-5C15.5 17 18 15 18 13c0-3-4.5-6-4.5-9.5");
}
</style><path class="z7y9_gy1s"/>`,
		"fallback": "uix:curtains",
	});
}

export default Component;
