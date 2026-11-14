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
		"content": `<style>.exzmrnjng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 4l1.5 3.25l3.25 1.5l-3.25 1.5L12 13.5l-1.5-3.25l-3.25-1.5l3.25-1.5ZM2.5 16.25h19m-15.5 3q6 3.75 12 0");
}
</style><path class="exzmrnjng"/>`,
		"fallback": "uix-sharp:celestial-navigation",
	});
}

export default Component;
