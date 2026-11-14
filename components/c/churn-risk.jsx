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
		"content": `<style>.qu_l3rkbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.072 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.195 0 2.312.178 3.299.506M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM18 14l4 7.5h-8Zm0 3.25v1M18 20h.01");
}
</style><path class="qu_l3rkbb"/>`,
		"fallback": "uix-sharp:churn-risk",
	});
}

export default Component;
