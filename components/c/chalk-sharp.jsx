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
		"content": `<style>.uldps0q0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.3 11.88l8.08-8.08l.71-.71l.71.71l1.4 1.4l.71.71l-.71.71l-8.08 8.08l-.71.71l-.71-.71l-1.4-1.4l-.71-.71zm-4.05 7.87c2-1.5 3.5-1.5 5 0s3.5 1.5 5 0s3.5-1.5 5 0");
}
</style><path class="uldps0q0t"/>`,
		"fallback": "iconoven:chalk-sharp",
	});
}

export default Component;
