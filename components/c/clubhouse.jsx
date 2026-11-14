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
		"content": `<style>.hflmkbb8e {
  d: path("m2.5 12.5l9.5-5l9.5 5Zm1.5 0v9h16v-9m-8-5v-5m0 0L16.5 4L12 5.5Z");
}

.iway7y6kf {
  d: path("M10 21.5V17h4v4.5M6.5 16H8m8 0h1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hflmkbb8e"/><path class="iway7y6kf"/></g>`,
		"fallback": "uix-sharp:clubhouse",
	});
}

export default Component;
