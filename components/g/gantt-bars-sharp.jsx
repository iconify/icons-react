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
		"content": `<style>.j5kmpwfqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75v18.5M5.5 3.75h8v3.5h-8zm4 6.5h9v3.5h-9zm3.75 6.5h8v3.5h-8z");
}
</style><path class="j5kmpwfqt"/>`,
		"fallback": "iconoven:gantt-bars-sharp",
	});
}

export default Component;
