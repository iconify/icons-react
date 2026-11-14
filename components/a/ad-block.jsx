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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wz-_j1bgo {
  d: path("M5 7.5h4.75v3H5Zm15.5-4l-17 17");
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="wz-_j1bgo"/></g>`,
		"fallback": "uix-sharp:ad-block",
	});
}

export default Component;
