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
		"content": `<style>.rdrqcfbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12C3.75 9.75 5.25 8.75 7 8.75s3.25 1 4.5 3.25c-1.25 2.25-2.75 3.25-4.5 3.25s-3.25-1-4.5-3.25ZM7 12h.01m7.24 0h7.25M19 9.5l2.5 2.5l-2.5 2.5");
}
</style><path class="rdrqcfbvc"/>`,
		"fallback": "uix-sharp:gaze-ray",
	});
}

export default Component;
