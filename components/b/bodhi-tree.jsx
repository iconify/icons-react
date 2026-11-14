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
		"content": `<style>.oauzcl8pw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5c-3 0-3-5 0-5C5 4 10 2 12.5 4c2.5-2 8-.5 7 4.5c3 .5 2.5 5-.5 5Zm5.5 0v4l-3 3m6-7v4l3 3");
}
</style><path class="oauzcl8pw"/>`,
		"fallback": "uix-sharp:bodhi-tree",
	});
}

export default Component;
