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
		"content": `<style>.hokcw_rvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l9.75 18H2.25Zm0 9.25v6m2.598-4.5l-5.196 3m5.196 0l-5.196-3");
}
</style><path class="hokcw_rvl"/>`,
		"fallback": "uix-sharp:ice-risk-sign",
	});
}

export default Component;
