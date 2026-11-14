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
		"content": `<style>.b0_o7jbxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 21c0-4 3-6.5 7-6.5c1.241 0 2.389.252 3.374.71M15 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 5.75c.75-.35 1.6-.5 2.5-.5c2.5 0 4 1.75 4 3.75M18 15v6m-3-3h6");
}
</style><path class="b0_o7jbxi"/>`,
		"fallback": "uix-sharp:group-invite",
	});
}

export default Component;
