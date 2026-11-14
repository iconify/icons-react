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
		"content": `<style>.nfjjgtj5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v18H15m-7-3.5v-5m4 5v-9m4 9V5m3.5 9v3.75m0 3h.01");
}
</style><path class="nfjjgtj5s"/>`,
		"fallback": "uix-sharp:analytics-alert",
	});
}

export default Component;
