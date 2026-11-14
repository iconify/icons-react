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
		"content": `<style>.t1z82bbsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h5.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Zm-2 6A2.25 2.25 0 0 0 5 13m1 2.5h7.5v6H6ZM19.5 20V4m-2.25 2.25L19.5 4l2.25 2.25");
}
</style><path class="t1z82bbsq"/>`,
		"fallback": "uix-sharp:boxer-uppercut",
	});
}

export default Component;
