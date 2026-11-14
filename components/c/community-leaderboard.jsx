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
		"content": `<style>.wstadyb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5v-6h5v-3.25h7v2.25h5v7Zm8.5-17l.882 1.536l1.733.364l-1.188 1.314l.189 1.761L12 7.75l-1.616.725l.189-1.761L9.385 5.4l1.733-.364Z");
}
</style><path class="wstadyb_k"/>`,
		"fallback": "uix-sharp:community-leaderboard",
	});
}

export default Component;
