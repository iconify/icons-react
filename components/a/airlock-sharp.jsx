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
		"content": `<style>.q55u3_bwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25V10a5.5 5.5 0 0 1 11 0v11.25ZM12 4.5v16.75M6.5 14h11m-13-3.5l-1.75 2l1.75 2m15-4l1.75 2l-1.75 2");
}
</style><path class="q55u3_bwk"/>`,
		"fallback": "iconoven:airlock-sharp",
	});
}

export default Component;
