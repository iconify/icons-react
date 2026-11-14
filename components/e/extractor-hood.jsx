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
		"content": `<style>.cfrr7xwsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5h6V8l5.5 7.5h-17L9 8ZM6 19v2m6-2v2m6-2v2");
}
</style><path class="cfrr7xwsj"/>`,
		"fallback": "uix:extractor-hood",
	});
}

export default Component;
