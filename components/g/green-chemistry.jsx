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
		"content": `<style>.xcexdpivv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8v3l-5 9a1 1 0 0 0 1 1.5h12a1 1 0 0 0 1-1.5l-5-9V8m-2 0c0-3.5 2.5-5.5 6.5-5.5C18.5 6 16 8 12 8m-4.5 7.5h9");
}
</style><path class="xcexdpivv"/>`,
		"fallback": "uix:green-chemistry",
	});
}

export default Component;
