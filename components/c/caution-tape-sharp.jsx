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
		"content": `<style>.xqgo0g9_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.7 11.69l16.6-5.38l.95-.31v7l-.95.31l-16.6 5.38l-.95.31v-7zm1.55 5.5l2.25-5.73m1.75 4.43l2.25-5.73m1.75 4.43l2.25-5.73m1.75 4.44l2.25-5.73");
}
</style><path class="xqgo0g9_x"/>`,
		"fallback": "iconoven:caution-tape-sharp",
	});
}

export default Component;
