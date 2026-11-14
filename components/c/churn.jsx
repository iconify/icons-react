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
		"content": `<style>.bws6r8bvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.672 21H4.5c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.437 0 2.76.257 3.882.724M7 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M14.5 18h6.75m-2.75-2.75L21.25 18l-2.75 2.75");
}
</style><path class="bws6r8bvk"/>`,
		"fallback": "uix:churn",
	});
}

export default Component;
