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
		"content": `<style>.jrx33obyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.6V3h4v11.6a3.25 3.25 0 1 1-4 0ZM13.75 4l-1.5 2l1.5 2l1.5 2l-1.5 2l-1.5 2l1.5 2l1.5 2l-1.5 2m4.5-16l-1.5 2l1.5 2l1.5 2l-1.5 2l-1.5 2l1.5 2l1.5 2l-1.5 2");
}
</style><path class="jrx33obyk"/>`,
		"fallback": "iconoven:heat-stress-sharp",
	});
}

export default Component;
