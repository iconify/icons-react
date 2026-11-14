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
		"content": `<style>.k-p5ms1kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14 2.5l-9.5 11h7l-1.5 8L19.5 10h-7Z");
}
</style><path class="k-p5ms1kf"/>`,
		"fallback": "uix-sharp:boost-mode",
	});
}

export default Component;
