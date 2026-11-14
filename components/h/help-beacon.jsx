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
		"content": `<style>.lkumw-b1m {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm8.5-3.5l3.25-3.25M8.5 8.5L5.25 5.25M8.5 15.5l-3.25 3.25M15.5 15.5l3.25 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="lkumw-b1m"/></g>`,
		"fallback": "uix-sharp:help-beacon",
	});
}

export default Component;
