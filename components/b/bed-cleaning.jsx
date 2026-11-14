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
		"content": `<style>.ihkws6bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-7.5h16a2 2 0 0 1 2 2V20M3 16.5h18m-5.5-14l1.237 2.263L19 6l-2.263 1.237L15.5 9.5l-1.237-2.263L12 6l2.263-1.237Z");
}
</style><path class="ihkws6bvo"/>`,
		"fallback": "uix-sharp:bed-cleaning",
	});
}

export default Component;
