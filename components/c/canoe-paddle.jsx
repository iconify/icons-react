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
		"content": `<style>.hrvum9pgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.718 5.282l-7.425 7.425m-1.768-1.768l3.536 3.536l-6.011 6.01l-3.535-3.535Zm7.778-7.071l2.829 2.829");
}
</style><path class="hrvum9pgy"/>`,
		"fallback": "uix-sharp:canoe-paddle",
	});
}

export default Component;
