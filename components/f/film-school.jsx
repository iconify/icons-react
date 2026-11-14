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
		"content": `<style>.c1u4lm_rr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7L12 3l8.5 4l-8.5 4Zm17 0v4m-16 3h15v7h-15Zm5 0v7m5-7v7");
}
</style><path class="c1u4lm_rr"/>`,
		"fallback": "uix-sharp:film-school",
	});
}

export default Component;
