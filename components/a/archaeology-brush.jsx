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
		"content": `<style>.b87zpab8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.718 5.282l-4.95 4.95m-1.061-1.06l2.121 2.121a1.5 1.5 0 0 1 0 2.121a1.5 1.5 0 0 1-2.121 0l-2.121-2.121a1.5 1.5 0 0 1 0-2.121a1.5 1.5 0 0 1 2.121 0m-2.239 2.003l2.357 2.357a1.5 1.5 0 0 1 .116 1.99L9.51 19.868A1.5 1.5 0 0 1 7.272 20L4 16.728a1.5 1.5 0 0 1 .132-2.238l4.346-3.431a1.5 1.5 0 0 1 1.99.116m-.943 3.3l-3.889 3.889");
}
</style><path class="b87zpab8n"/>`,
		"fallback": "uix:archaeology-brush",
	});
}

export default Component;
