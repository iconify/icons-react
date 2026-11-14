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
		"content": `<style>.s1lm1dprr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v6.5h-19ZM9 3v6.5M15 3v6.5m-10.5 3v7A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-7m-15 4.25h15");
}
</style><path class="s1lm1dprr"/>`,
		"fallback": "uix-sharp:data-record",
	});
}

export default Component;
