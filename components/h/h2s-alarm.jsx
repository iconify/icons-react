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
		"content": `<style>.v0de5pb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16v-4.5a4.5 4.5 0 0 1 9 0V16M5 16h14v4H5Zm-.5-6a7.5 7.5 0 0 1 3-5.5m12 5.5a7.5 7.5 0 0 0-3-5.5");
}
</style><path class="v0de5pb9y"/>`,
		"fallback": "uix-sharp:h2s-alarm",
	});
}

export default Component;
