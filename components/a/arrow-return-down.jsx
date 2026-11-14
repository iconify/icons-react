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
		"content": `<style>.p6ojop6hs {
  d: path("M5.5 15V9.5a4.5 4.5 0 0 1 9 0v10");
}

.r-ih53m4g {
  d: path("m10.5 15.5l4 4l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p6ojop6hs"/><path class="r-ih53m4g"/></g>`,
		"fallback": "uix-sharp:arrow-return-down",
	});
}

export default Component;
