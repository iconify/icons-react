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
		"content": `<style>.vwilq4b0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM2.5 21c0-4 3.25-6.5 7.5-6.5c.758 0 1.485.08 2.167.233M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="vwilq4b0l"/>`,
		"fallback": "uix-sharp:business-fidelity-bond",
	});
}

export default Component;
