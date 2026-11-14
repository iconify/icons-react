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
		"content": `<style>.wqydkybfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 5c-1.5-3-5.5-3-7 0L4 3v4l2-2c1.5 3 5.5 3 7 0Zm7.5 7c-1.5-3-5.5-3-7 0l-2-2v4l2-2c1.5 3 5.5 3 7 0Zm-8 7c-1.5-3-5.5-3-7 0l-2-2v4l2-2c1.5 3 5.5 3 7 0Z");
}
</style><path class="wqydkybfm"/>`,
		"fallback": "uix-sharp:fish-school",
	});
}

export default Component;
