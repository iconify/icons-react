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
		"content": `<style>.lhr269lyl {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-7 0h7m5 0h7m-8.25-2.25l2.5-4.25m-5 4.25L8.25 5.5m2.5 8.75l-2.5 4.25m5-4.25l2.5 4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdp7bqefo {
  d: path("M4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="wdp7bqefo"/><path class="lhr269lyl"/></g>`,
		"fallback": "uix-sharp:conan-wheel",
	});
}

export default Component;
