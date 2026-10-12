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
		"content": `<style>.fn22sbg1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 5.5c-3.9 0-7 2.9-7 6.5s3.1 6.5 7 6.5h1.75v-13zm3.75 0h7.75M13.5 8.75h7.75M13.5 12h7.75m-7.75 3.25h7.75M13.5 18.5h7.75");
}
</style><path class="fn22sbg1f"/>`,
		"fallback": "iconoven:high-beam-sharp",
	});
}

export default Component;
