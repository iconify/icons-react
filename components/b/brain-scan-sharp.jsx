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
		"content": `<style>.s8x6ke38m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5V2.75H7.5m9 0h4.75V7.5m0 9v4.75H16.5m-9 0H2.75V16.5m9.25-9l-.989-1.648L9.1 6.25l-1.799.415L7.1 8.5a2.6 2.6 0 0 0-1.1 4a2.6 2.6 0 0 0 1.5 3.75l.743 2.513L10.75 18l.625.5h1.25l.625-.5l2.507.763l.743-2.513A2.6 2.6 0 0 0 18 12.5a2.6 2.6 0 0 0-1.1-4l-.201-1.835L14.9 6.25l-1.911-.398zm0 0v11m-7.25-6h14.5");
}
</style><path class="s8x6ke38m"/>`,
		"fallback": "iconoven:brain-scan-sharp",
	});
}

export default Component;
