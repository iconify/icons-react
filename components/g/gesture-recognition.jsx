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
		"content": `<style>.z-to7aiwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.5V7a1.5 1.5 0 0 1 3 0v4v-6.5a1.5 1.5 0 0 1 3 0V11V6a1.5 1.5 0 0 1 3 0v8.5c0 4-2.25 6.5-5 6.5c-2.25 0-3.5-1-4.75-2.5l-2.5-3.25a1.5 1.5 0 0 1 2.25-2l1 1.25M18 4a5 5 0 0 1 0 5m2.75-6.25a7.5 7.5 0 0 1 0 7.5");
}
</style><path class="z-to7aiwp"/>`,
		"fallback": "uix-sharp:gesture-recognition",
	});
}

export default Component;
