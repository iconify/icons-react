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
		"content": `<style>.j2-ckxc4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h6V11l7.5 3c1 .5 1.5 1.5 1.5 2.5V18H5.5v-6ZM5.5 15H21M8 7h4");
}
</style><path class="j2-ckxc4w"/>`,
		"fallback": "uix-sharp:hiking-boots",
	});
}

export default Component;
