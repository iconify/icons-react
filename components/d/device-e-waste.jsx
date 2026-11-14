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
		"content": `<style>.kjjb163_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5h15V21h-15ZM3 6.5h18m-11.5 0V4h5v2.5m-5.5 6V18m3-5.5V18m3-5.5V18");
}
</style><path class="kjjb163_e"/>`,
		"fallback": "uix-sharp:device-e-waste",
	});
}

export default Component;
